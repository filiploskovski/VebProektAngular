import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  incomeForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    isMonthly: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  save(): void {
    console.log(this.incomeForm);
}

}
