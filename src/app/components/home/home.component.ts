import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/models/AccountModel';
import { ApiService } from 'src/app/services/api.service';
import { AccountTypeModel } from 'src/app/models/AccountTypeModel';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { IncomeModel } from 'src/app/models/IncomeModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  dashboard: any;

  constructor(private router: Router,private api: ApiService,private dataTransfer: DataTransferService) { }

  ngOnInit() {
    this.get();
  }

  accountDetails(id: number){
    this.dataTransfer.setMessage(id);
    this.router.navigate(['/account-details']);
  }

  get(): void {
    this.api.Dashboard().subscribe({
      next: (model: any) => {
        this.dashboard = model;
         console.log(this.dashboard)
      }
    });
  }

}
