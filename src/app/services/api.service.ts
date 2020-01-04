import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountTypeModel } from '../models/AccountTypeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  private accountTypeSave = `${this.apiUrl}/AccountType`;
  private accountTypeDelete = `${this.apiUrl}/AccountType`;
  private accountTypeFillForm = `${this.apiUrl}/AccountType/get-by-id`;
  private accountTypeGet = `${this.apiUrl}/AccountType/get`;

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
  
  // AccountTypeDelete(obj: AccountTypeModel): Observable<{}> {
  //   return this.http.delete(this.accountTypeDelete, obj, {headers: this.httpBuildOptions()}).pipe();
  // }
}
