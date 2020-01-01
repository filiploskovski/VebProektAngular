import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountForm = new FormGroup({
    accountType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

  save(): void {
      console.log(this.accountForm);
  }

}
