import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountTypeModel } from '../models/AccountTypeModel';
import { AccountModel } from '../models/AccountModel';
import { IncomeTypeModel } from '../models/IncomeTypeModel';
import { IncomeModel } from '../models/IncomeModel';
import { ExpenseTypeModel } from '../models/ExpenseTypeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

   // Dashboard
   private dashboard = `${this.apiUrl}/home/dashboard`;


  // Account Type
  private accountTypeSave = `${this.apiUrl}/account-type`;
  private accountTypeDelete = `${this.apiUrl}/account-type`;
  private accountTypeFillForm = `${this.apiUrl}/account-type/get-by-id`;
  private accountTypeGet = `${this.apiUrl}/account-type/get`;
  
  // Account
  private accountSave = `${this.apiUrl}/account`;
  private accountDelete = `${this.apiUrl}/account`;
  private accountFillForm = `${this.apiUrl}/account/get-by-id`;
  private accountGet = `${this.apiUrl}/account/get`;

  // Income Type 
  private incomeTypeSave = `${this.apiUrl}/income-type`;
  private incomeTypeDelete = `${this.apiUrl}/income-type`;
  private incomeTypeFillForm = `${this.apiUrl}/income-type/get-by-id`;
  private incomeTypeGet = `${this.apiUrl}/income-type/get`;

  // Income
  private incomeSave = `${this.apiUrl}/income`;
  private incomeDelete = `${this.apiUrl}/income`;
  private incomeFillForm = `${this.apiUrl}/income/get-by-id`;
  private incomeGet = `${this.apiUrl}/income/get`;
  private incomeGetTopThreeByDate = `${this.apiUrl}/income/get-top-three`;

  // Expense Type
  private expenseTypeSave = `${this.apiUrl}/expense-type`;
  private expenseTypeDelete = `${this.apiUrl}/expense-type`;
  private expenseTypeFillForm = `${this.apiUrl}/expense-type/get-by-id`;
  private expenseTypeGet = `${this.apiUrl}/expense-type/get`;

  constructor(private http: HttpClient) { }

  httpBuildOptions() {
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');
    return headerOptions;
  }

  Dashboard(): Observable<{}> {
    return this.http.get(this.dashboard).pipe();
  }

  AccountTypeGet(): Observable<{}> {
    return this.http.get(this.accountTypeGet).pipe();
  }

  AccountTypeGetById(obj: AccountTypeModel): Observable<{}> {
    return this.http.post(this.accountTypeFillForm, obj, {headers: this.httpBuildOptions()}).pipe();
  }

  AccountTypeSave(obj: AccountTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http.post(this.accountTypeSave, obj).pipe();
      default:
        return this.http.put(this.accountTypeSave, obj).pipe();
    }
  }

  AccountGet(): Observable<{}> {
    return this.http.get(this.accountGet).pipe();
  }

  AccountGetById(obj: AccountModel): Observable<{}> {
    return this.http.post(this.accountFillForm, obj, {headers: this.httpBuildOptions()}).pipe();
  }

  AccountSave(obj: AccountModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http.post(this.accountSave, obj).pipe();
      default:
        return this.http.put(this.accountSave, obj).pipe();
    }
  }

  IncomeTypeGet(): Observable<{}> {
    return this.http.get(this.incomeTypeGet).pipe();
  }

  IncomeTypeGetById(obj: IncomeTypeModel): Observable<{}> {
    return this.http.post(this.incomeTypeFillForm, obj, {headers: this.httpBuildOptions()}).pipe();
  }

  IncomeTypeSave(obj: IncomeTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http.post(this.incomeTypeSave, obj).pipe();
      default:
        return this.http.put(this.incomeTypeSave, obj).pipe();
    }
  }

  IncomeGet(): Observable<{}> {
    return this.http.get(this.incomeGet).pipe();
  }

  IncomeGetById(obj: IncomeModel): Observable<{}> {
    return this.http.post(this.incomeFillForm, obj, {headers: this.httpBuildOptions()}).pipe();
  }

  IncomeSave(obj: IncomeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http.post(this.incomeSave, obj).pipe();
      default:
        return this.http.put(this.incomeSave, obj).pipe();
    }
  }

  ExpenseTypeGet(): Observable<{}> {
    return this.http.get(this.expenseTypeGet).pipe();
  }

  ExpenseTypeGetById(obj: ExpenseTypeModel): Observable<{}> {
    return this.http.post(this.expenseTypeFillForm, obj, {headers: this.httpBuildOptions()}).pipe();
  }

  ExpenseTypeSave(obj: ExpenseTypeModel): Observable<{}> {
    switch (obj.Id) {
      case 0:
        return this.http.post(this.expenseTypeSave, obj).pipe();
      default:
        return this.http.put(this.expenseTypeSave, obj).pipe();
    }
  }
 
 
}
