import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountTypeModel } from '../models/AccountTypeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = environment.apiUrl;

  private accountTypeInsert = `${this.apiUrl}/insert`;

  constructor(private http: HttpClient) { }

  //FillData
  FillDataAccount(obj): Observable<{}> {
    return this.http.post("www.goolge.com", obj).pipe();
  }

  FillFormAccount(obj): Observable<{}> {
    return this.http.post("www.goolge.com", obj).pipe();
  }

  SaveAccount(obj: AccountTypeModel): Observable<{}> {
    switch (obj['id']) {
      case 0:
        return this.http.post(this.accountTypeInsert, obj).pipe();
      default:
        return this.http.put(this.accountTypeInsert, obj).pipe();
    }

  }
}
