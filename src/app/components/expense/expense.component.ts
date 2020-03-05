import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { NotifyService } from "src/app/services/notify.service";
import { DatePipe } from "@angular/common";
import { DataTransferService } from "src/app/services/data-transfer.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { ExpenseModel } from "src/app/models/ExpenseModel";
import { IGenericComponent } from "src/app/Interface/IGenericComponent";
import { ExpenseTypeModel } from 'src/app/models/ExpenseTypeModel';
import { AccountModel } from 'src/app/models/AccountModel';
import { DeleteModel } from 'src/app/models/DeleteModel';

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  providers: [DatePipe],
  styleUrls: ["./expense.component.scss"]
})
export class ExpenseComponent
  implements OnInit, AfterViewInit, OnDestroy, IGenericComponent<ExpenseModel> {
  
  // DataTable
  @ViewChild(DataTableDirective, { static: true })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  expenseTypeList: ExpenseTypeModel[];
  accountList: AccountModel[];
  expenseList: ExpenseModel[];
  expenseModel: ExpenseModel;
  
  expenseForm = new FormGroup({
    Id: new FormControl(0),
    AccountId: new FormControl("", [Validators.required]),
    ExpenseTypeId: new FormControl("", [Validators.required]),
    Name: new FormControl("", [Validators.required]),
    Amount: new FormControl("", [Validators.required]),
    Date: new FormControl("", [Validators.required])
  });

   // Delete
   deleteModel: DeleteModel = {Id: 0, Name: ""};

  constructor(
    private api: ApiService,
    private notify: NotifyService,
    private datePipe: DatePipe,
    private dataTransfer: DataTransferService
  ) {}

  ngOnInit() {
    this.pageLoad(this.dataTransfer.readMessage());
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  pageLoad(id?: number) {
    this.getExpenseType();
    this.getAccount();

    this.Get();
    if (id != null) {
      this.GetById(id);
    }
  }

  getExpenseType(): void {
    this.api
      .ExpenseTypeGet()
      .subscribe((model: ExpenseTypeModel[]) => (this.expenseTypeList = model));
  }

  getAccount(): void {
    this.api
      .AccountGet()
      .subscribe((model: AccountModel[]) => (this.accountList = model));
  }


  Get(): void {
    this.api.ExpenseGet().subscribe({
      next: (model: ExpenseModel[]) => {
        this.expenseList = model;
        this.rerender();
      }
    });
  }

  GetById(id: number): void {
    const entity = new ExpenseModel(id);
    this.api.ExpenseGetById(entity).subscribe({
      next: (model: ExpenseModel) => {
        this.expenseForm.patchValue({
          Id: model.Id,
          Name: model.Name,
          AccountId: model.AccountId,
          ExpenseTypeId: model.ExpenseTypeId,
          Amount: model.Amount,
          Date: this.datePipe.transform(model.Date, 'yyyy-MM-dd')
        });
      }
    });
  }

  save(): void {
    this.api.ExpenseSave(this.expenseForm.value as ExpenseModel).subscribe({
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
    this.deleteModel = this.expenseList.find(x => x.Id == id);
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
