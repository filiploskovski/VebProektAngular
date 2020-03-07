import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  username: string;


  ngOnInit() {
    this.username = localStorage.getItem("username");
  }

  logOut() {
    console.log("Pred clear", localStorage);
    localStorage.clear();
    console.log("Posle clear", localStorage);
    this.router.navigate(["/login"]);
  }
}
