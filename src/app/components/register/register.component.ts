import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('',[Validators.required])
  });

  constructor(private api : ApiService,private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.api.UserRegister(this.registerForm.value as RegisterModel).subscribe({
      complete: () => this.router.navigate(['/login']),
      error: (a: any) => console.log(a)
      
    })
  }
  

}
