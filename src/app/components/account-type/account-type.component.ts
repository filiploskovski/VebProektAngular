import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AccountTypeModel } from "src/app/models/AccountTypeModel";
import { ApiService } from "src/app/services/api.service";
import { Subject } from 'rxjs';
import { NotifyService } from 'src/app/services/notify.service';
import { IGenericComponent } from 'src/app/Interface/IGenericComponent';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: "app-account-type",
  templateUrl: "./account-type.component.html",
  styleUrls: ["./account-type.component.scss"]
})
export class AccountTypeComponent implements OnInit, OnDestroy, IGenericComponent<AccountTypeModel> {
 
  // DataTable
  @ViewChild(DataTableDirective, {static: true})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  // Data
  public accountTypeList: AccountTypeModel[];
  
  // Form
  accountTypeForm = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl("", [Validators.required])
  });

  // Delete
  public accountTypeModel: AccountTypeModel = {Id: 0,Name: ""};

  constructor(private api: ApiService,private notify: NotifyService) {}

  ngOnInit() {
    this.pageLoad();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  edit(id: number): void {
    this.pageLoad(id);
  }

  save(): void {
    this.api
      .AccountTypeSave(this.accountTypeForm.value as AccountTypeModel)
      .subscribe({
        next: () => {},
        complete: () => {
          this.pageLoad();
          this.notify.showDefaultSuccess();
        }
      });
  }

  pageLoad(id?: number): void {
    this.Get();
    if(id != null) { this.GetById(id) }
  }

  preDelete(id: number) {
    console.log(id);
    this.accountTypeModel = this.accountTypeList.find(x => x.Id == id); 
  }

  delete(id: number) {
    console.log(id);
  }

  Get(): void {
    this.api.AccountTypeGet().subscribe({
      next: (model: AccountTypeModel[]) => {
        this.accountTypeList = model;
        this.rerender();
        }
    });
  }

  GetById(id: number): void {
    const entity = new AccountTypeModel(id);
      this.api.AccountTypeGetById(entity).subscribe({
        next: (model: AccountTypeModel) => {
          this.accountTypeForm.patchValue({
            Id: model.Id,
            Name: model.Name
          });
        }
      });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
