import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { ExpenseTypeComponent } from './components/expense-type/expense-type.component';
import { IncomeTypeComponent } from './components/income-type/income-type.component';
import { IncomeComponent } from './components/income/income.component';


const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account-type', component: AccountTypeComponent},
  {path: 'expense-type', component: ExpenseTypeComponent},
  {path: 'income-type', component: IncomeTypeComponent},
  {path: 'income', component: IncomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
