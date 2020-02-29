import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AccountModel } from "src/app/models/AccountModel";
import { ApiService } from "src/app/services/api.service";
import { IncomeTypeModel } from "src/app/models/IncomeTypeModel";
import { NotifyService } from "src/app/services/notify.service";
import { IncomeModel } from "src/app/models/IncomeModel";
import { IGenericComponent } from "src/app/Interface/IGenericComponent";
import { DeleteModel } from "src/app/models/DeleteModel";
import { Subject } from "rxjs";
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: "app-income",
  templateUrl: "./income.component.html",
  styleUrls: ["./income.component.scss"],
  providers: [DatePipe]
})
export class IncomeComponent
  implements OnInit,AfterViewInit ,OnDestroy, IGenericComponent<IncomeModel> {
  
  // DataTable
  @ViewChild(DataTableDirective, {static: true})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Data
  accountList: AccountModel[];
  incomeTypeList: IncomeTypeModel[];
  incomeList: IncomeModel[];
  currentDate: Date;

  // Form
  incomeForm = new FormGroup({
    Id: new FormControl(0),
    IsMonthly: new FormControl("", [Validators.required]),
    AccountId: new FormControl("", [Validators.required]),
    IncomeTypeId: new FormControl("", [Validators.required]),
    Name: new FormControl("", [Validators.required]),
    Amount: new FormControl("", [Validators.required]),
    Date: new FormControl("", [Validators.required])
  });

  // Delete
  deleteModel: DeleteModel = {Id: 0, Name: ""};

  constructor(private api: ApiService, private notify: NotifyService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.pageLoad();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  pageLoad(id?: number) {
    this.getIncomeType();
    this.getAccount();

    this.Get();
    if (id != null) {
      this.GetById(id);
    }
  }

  getIncomeType(): void {
    this.api
      .IncomeTypeGet()
      .subscribe((model: IncomeTypeModel[]) => (this.incomeTypeList = model));
  }

  getAccount(): void {
    this.api
      .AccountGet()
      .subscribe((model: AccountModel[]) => (this.accountList = model));
  }

  Get(): void {
    this.api.IncomeGet().subscribe({
      next: (model: IncomeModel[]) => {
        this.incomeList = model;
        this.rerender();
      }
    });
  }

  GetById(id: number): void {
    const entity = new IncomeModel(id);
    this.api.IncomeGetById(entity).subscribe({
      next: (model: IncomeModel) => {
        this.incomeForm.patchValue({
          Id: model.Id,
          Name: model.Name,
          IsMonthly: model.IsMonthly,
          AccountId: model.AccountId,
          IncomeTypeId: model.IncomeTypeId,
          Amount: model.Amount,
          Date: this.datePipe.transform(model.Date, 'yyyy-MM-dd')
        });
      }
    });
  }

  save(): void {
    this.api.IncomeSave(this.incomeForm.value as IncomeModel).subscribe({
      next: () => {},
      complete: () => {
        this.notify.showDefaultSuccess();
        this.pageLoad();
      }
    });
  }

  edit(id: number): void {
    this.pageLoad(id);
  }

  preDelete(id: number) {
    this.deleteModel = this.incomeList.find(x => x.Id == id);
  }

  delete(id: number) {
    console.log(id);
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  
}
