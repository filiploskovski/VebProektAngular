import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  accountTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  save(): void {
    console.log(this.accountTypeForm);
}

}
