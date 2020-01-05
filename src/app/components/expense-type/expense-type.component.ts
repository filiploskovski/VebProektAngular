import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.scss']
})
export class ExpenseTypeComponent implements OnInit   {

  dtOptions: DataTables.Settings = {};

  expenseTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  save(): void {
    console.log(this.expenseTypeForm);
}

}
