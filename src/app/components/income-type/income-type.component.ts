import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-type',
  templateUrl: './income-type.component.html',
  styleUrls: ['./income-type.component.scss']
})
export class IncomeTypeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  incomeTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  save(): void {
    console.log(this.incomeTypeForm);
}

}
