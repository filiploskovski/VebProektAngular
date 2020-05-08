import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AccountTypeModel } from "../models/AccountTypeModel";
import { AccountModel } from "../models/AccountModel";
import { IncomeTypeModel } from "../models/IncomeTypeModel";
import { IncomeModel } from "../models/IncomeModel";
import { ExpenseTypeModel } from "../models/ExpenseTypeModel";
import { ExpenseModel } from "../models/ExpenseModel";
import { RegisterModel } from "../models/RegisterModel";
import { LoginModel } from "../models/LoginModel";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  //User Register
  public login = `${this.apiUrl}/user/login`;

  //User Register
  public register = `${this.apiUrl}/user/register`;

  // Dashboard
  private dashboard = `${this.apiUrl}/home/dashboard`;

  // Account Type
  private accountTypeSave = `${this.apiUrl}/account-type`;
  private accountTypeDelete = `${this.apiUrl}/account-type?id=`;
  private accountTypeFillForm = `${this.apiUrl}/account-type/get-by-id`;
  private accountTypeGet = `${this.apiUrl}/account-type/get`;

  // Account
  private accountSave = `${this.apiUrl}/account`;
  private accountDelete = `${this.apiUrl}/account?id=`;
  private accountFillForm = `${this.apiUrl}/account/get-by-id`;
  private accountGet = `${this.apiUrl}/account/get`;

  // Income Type
  private incomeTypeSave = `${this.apiUrl}/income-type`;
  private incomeTypeDelete = `${this.apiUrl}/income-type?id=`;
  private incomeTypeFillForm = `${this.apiUrl}/income-type/get-by-id`;
  private incomeTypeGet = `${this.apiUrl}/income-type/get`;

  // Income
  private incomeSave = `${this.apiUrl}/income`;
  private incomeDelete = `${this.apiUrl}/income?id=`;
  private incomeFillForm = `${this.apiUrl}/income/get-by-id`;
  private incomeGet = `${this.apiUrl}/income/get`;
  private incomeGetTopThreeByDate = `${this.apiUrl}/income/get-top-three`;

  // Expense Type
  private expenseTypeSave = `${this.apiUrl}/expense-type`;
  private expenseTypeDelete = `${this.apiUrl}/expense-type?id=`;
  private expenseTypeFillForm = `${this.apiUrl}/expense-type/get-by-id`;
  private expenseTypeGet = `${this.apiUrl}/expense-type/get`;

  // Expense
  private expenseSave = `${this.apiUrl}/expense`;
  private expenseDelete = `${this.apiUrl}/expense?id=`;
  private expenseFillForm = `${this.apiUrl}/expense/get-by-id`;
  private expenseGet = `${this.apiUrl}/expense/get`;

  constructor(private http: HttpClient, private auth: AuthService) {}

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    //.set("Authorization", `Bearer ${this.auth.getToken()}`);

  UserLogin(obj: LoginModel): Observable<{}> {
    return this.http.post(this.login, obj, { headers: this.headers }).pipe();
  }

  UserRegister(obj: RegisterModel): Observable<{}> {
    return this.http.post(this.register, obj, { headers: this.headers }).pipe();
  }

  Dashboard(): Observable<{}> {
    return this.http.get(this.dashboard, { headers: this.headers }).pipe();
  }

  AccountTypeGet(): Observable<{}> {
    return this.http.get(this.accountTypeGet, { headers: this.headers }).pipe();
  }

  AccountTypeGetById(obj: AccountTypeModel): Observable<{}> {
    return this.http
      .post(this.accountTypeFillForm, obj, { headers: this.headers })
      .pipe();
  }

  AccountTypeSave(obj: AccountTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.accountTypeSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.accountTypeSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  AccountTypeDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.accountTypeDelete}${obj}`, { headers: this.headers })
          .pipe();
  }

  AccountGet(): Observable<{}> {
    return this.http.get(this.accountGet, { headers: this.headers }).pipe();
  }

  AccountGetById(obj: AccountModel): Observable<{}> {
    return this.http
      .post(this.accountFillForm, obj, { headers: this.headers })
      .pipe();
  }

  AccountSave(obj: AccountModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.accountSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.accountSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  AccountDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.accountDelete}${obj}`, { headers: this.headers })
          .pipe();
  }

  IncomeTypeGet(): Observable<{}> {
    return this.http.get(this.incomeTypeGet, { headers: this.headers }).pipe();
  }

  IncomeTypeGetById(obj: IncomeTypeModel): Observable<{}> {
    return this.http
      .post(this.incomeTypeFillForm, obj, { headers: this.headers })
      .pipe();
  }

  IncomeTypeSave(obj: IncomeTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.incomeTypeSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.incomeTypeSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  IncomeTypeDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.incomeTypeDelete}${obj}`, { headers: this.headers })
          .pipe();
  }

  IncomeGet(): Observable<{}> {
    return this.http.get(this.incomeGet, { headers: this.headers }).pipe();
  }

  IncomeGetById(obj: IncomeModel): Observable<{}> {
    return this.http
      .post(this.incomeFillForm, obj, { headers: this.headers })
      .pipe();
  }

  IncomeSave(obj: IncomeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.incomeSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.incomeSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  IncomeDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.incomeDelete}${obj}`, { headers: this.headers })
          .pipe();
  }

  ExpenseTypeGet(): Observable<{}> {
    return this.http.get(this.expenseTypeGet, { headers: this.headers }).pipe();
  }

  ExpenseTypeGetById(obj: ExpenseTypeModel): Observable<{}> {
    return this.http
      .post(this.expenseTypeFillForm, obj, { headers: this.headers })
      .pipe();
  }

  ExpenseTypeSave(obj: ExpenseTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.expenseTypeSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.expenseTypeSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  ExpenseTypeDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.expenseTypeDelete}${obj}`, { headers: this.headers })
          .pipe();
  }

  ExpenseGet(): Observable<{}> {
    return this.http.get(this.expenseGet, { headers: this.headers }).pipe();
  }

  ExpenseGetById(obj: ExpenseModel): Observable<{}> {
    return this.http
      .post(this.expenseFillForm, obj, { headers: this.headers })
      .pipe();
  }

  ExpenseSave(obj: ExpenseModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http
          .post(this.expenseSave, obj, { headers: this.headers })
          .pipe();
      default:
        return this.http
          .put(this.expenseSave, obj, { headers: this.headers })
          .pipe();
    }
  }

  ExpensetDelete(obj: Number): Observable<{}> {
    return this.http
          .delete(`${this.expenseDelete}${obj}`, { headers: this.headers })
          .pipe();
  }
}
