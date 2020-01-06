import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AccountModel } from 'src/app/models/AccountModel';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public accountList: AccountModel[];
  public accountModel: AccountModel = { Id: 0 ,Name:"", Amount: 0, AccountTypeId: 0, IsDefault: false };

  constructor(private router: Router,private api: ApiService,private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.Get();
  }

  accountDetails(id?: number): void {
    this.dataTransfer.setMessage(id);
    this.router.navigate(['/account-details']);
  }

  Get(): void {
    this.api.AccountGet().subscribe({
      next: (model: AccountModel[]) => {
        this.accountList = model;
      },
      complete: () => {
        this.dtTrigger.next();
      }
    });
  }

  preDelete(id: number) {
    this.accountModel = this.accountList.find(x => x.Id == id); 
  }

  delete(id: number){
    console.log(id);
  }

}
