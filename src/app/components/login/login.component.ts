import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { ApiService } from "src/app/services/api.service";
import { LoginModel } from "src/app/models/LoginModel";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl("Filip Loshkovski"),
    password: new FormControl("Qwerty1$")
  });

  constructor(
    private router: Router,
    private auth: AuthService,
    private api: ApiService
  ) {}

  ngOnInit() {}

  login(): void {
    this.api.UserLogin(this.loginForm.value as LoginModel).subscribe({
      next: (data: any) => {
        this.auth.setToken(data.Token);
        localStorage.setItem("username", data.Username);
      },
      complete: () => this.router.navigate(["home"]),
      error: (error: any) => console.log("Error", error)
    });
  }
}
