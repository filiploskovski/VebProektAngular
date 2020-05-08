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
    Email: new FormControl('', [Validators.required,Validators.email]),
    Password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  constructor(private api : ApiService,private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.registerForm.value.Password != this.registerForm.value.ConfirmPassword){
      window.alert("Password and Password Confirm are not the same");
    }else{
      this.api.UserRegister(this.registerForm.value as RegisterModel).subscribe({
        complete: () => this.router.navigate(['/login']),
        error: (a: any) => console.log(a)
      })
    }
  }
  

}
