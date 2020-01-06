import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountTypeModel } from '../models/AccountTypeModel';
import { AccountModel } from '../models/AccountModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

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

  constructor(private http: HttpClient) { }

  httpBuildOptions() {
    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');
    return headerOptions;
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
 
}
