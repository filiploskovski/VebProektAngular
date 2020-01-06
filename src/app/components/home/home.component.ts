import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/models/AccountModel';
import { ApiService } from 'src/app/services/api.service';
import { AccountTypeModel } from 'src/app/models/AccountTypeModel';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public accountList: AccountModel[];

  constructor(private router: Router,private api: ApiService,private dataTransfer: DataTransferService) { }

  ngOnInit() {
    this.getAccount();
  }

  accountDetails(id: number){
    this.dataTransfer.setMessage(id);
    this.router.navigate(['/account-details']);
  }

  getAccount(): void {
    this.api.AccountGet().subscribe({
        next: (model: AccountModel[]) => this.accountList = model
    });
  }

}
