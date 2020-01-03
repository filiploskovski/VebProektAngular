import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  incomeForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    isMonthly: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });


  constructor() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
   }

  ngOnInit() {
  }

  save(): void {
    console.log(this.incomeForm);
}

}
