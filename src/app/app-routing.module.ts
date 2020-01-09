import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { ExpenseTypeComponent } from './components/expense-type/expense-type.component';
import { IncomeTypeComponent } from './components/income-type/income-type.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account-details', component: AccountDetailsComponent},
  {path: 'account-type', component: AccountTypeComponent},
  {path: 'expense-type', component: ExpenseTypeComponent},
  {path: 'income-type', component: IncomeTypeComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'expense', component: ExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
