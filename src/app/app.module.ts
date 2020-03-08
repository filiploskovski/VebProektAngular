import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AccountComponent } from "./components/account/account.component";

import { DataTablesModule } from "angular-datatables";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AccountTypeComponent } from "./components/account-type/account-type.component";
import { ExpenseTypeComponent } from "./components/expense-type/expense-type.component";
import { IncomeTypeComponent } from "./components/income-type/income-type.component";
import { IncomeComponent } from "./components/income/income.component";
import { ExpenseComponent } from "./components/expense/expense.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthInterceptor } from "./Interseptors/HttpInterceptor";
import { HttpErrorInterceptor } from './Interseptors/HttpErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    AccountTypeComponent,
    ExpenseTypeComponent,
    IncomeTypeComponent,
    IncomeComponent,
    ExpenseComponent,
    AccountDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DataTablesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
