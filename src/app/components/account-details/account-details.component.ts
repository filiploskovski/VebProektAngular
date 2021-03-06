import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountTypeModel } from 'src/app/models/AccountTypeModel';
import { ApiService } from 'src/app/services/api.service';
import { AccountModel } from 'src/app/models/AccountModel';
import { NotifyService } from 'src/app/services/notify.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { IGenericComponent } from 'src/app/Interface/IGenericComponent';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  providers: [DatePipe],
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit,AfterViewInit {
  
   // DataTable
   @ViewChild(DataTableDirective, {static: true})
   dtElement: DataTableDirective;
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
  
  accountTypeList: AccountTypeModel[];
  accountModel: AccountModel;
  showHideFlag: boolean = true;

  accountForm = new FormGroup({
    Id: new FormControl(0),
    AccountTypeId: new FormControl({value: ''}, [Validators.required]),
    Name: new FormControl('', [Validators.required]),
    Amount: new FormControl('', [Validators.required]),
    IsDefault: new FormControl('',[Validators.required])
  });
  
  constructor(private api: ApiService,private notify: NotifyService, private datePipe: DatePipe, private dataTransfer: DataTransferService, private router: Router) { }

  ngOnInit() {
    this.pageLoad(this.dataTransfer.readMessage());
    this.getAccountType();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  save(): void {
    this.api.AccountSave(this.accountForm.value as AccountModel).subscribe({
      next: () => {},
      complete: () =>{
        this.notify.showDefaultSuccess();
      }
    });
  }

  getAccountType(): void {
    this.api.AccountTypeGet()
    .subscribe((model: AccountTypeModel[]) => this.accountTypeList = model)
  }

  pageLoad(id?: number): void {
    if(id != null) { this.GetById(id) }
  }

  GetById(id: number): void {
    const entity = new AccountModel(id);
      this.api.AccountGetById(entity).subscribe({
        next: (model: AccountModel) => {
          this.accountModel = model;
          this.accountForm.patchValue({
            Id: model.Id,
            Name: model.Name,
            AccountTypeId: model.AccountTypeId,
            Amount: model.Amount,
            IsDefault: model.IsDefault
          });
          this.showHideFlag = false;
          this.rerender();
        }
      });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  routeToIncome(id: Number){
    console.log("Vo f-ja", id);
    this.dataTransfer.setMessage(id);
    this.router.navigate(['/income']);
  }

  routeToExpense(id: Number){
    this.dataTransfer.setMessage(id);
    this.router.navigate(['/expense']);
  }

}
