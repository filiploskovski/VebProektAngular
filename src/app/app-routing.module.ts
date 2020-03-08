import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AccountComponent } from "./components/account/account.component";
import { AccountTypeComponent } from "./components/account-type/account-type.component";
import { ExpenseTypeComponent } from "./components/expense-type/expense-type.component";
import { IncomeTypeComponent } from "./components/income-type/income-type.component";
import { IncomeComponent } from "./components/income/income.component";
import { ExpenseComponent } from "./components/expense/expense.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { RegisterComponent } from "./components/register/register.component";
import { CanActivateGuard } from "./guards/can-activate.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent
  },
  { path: "home", component: HomeComponent, canActivate: [CanActivateGuard] },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "account-details",
    component: AccountDetailsComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "account-type",
    component: AccountTypeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "expense-type",
    component: ExpenseTypeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "income-type",
    component: IncomeTypeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "income",
    component: IncomeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "expense",
    component: ExpenseComponent,
    canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
