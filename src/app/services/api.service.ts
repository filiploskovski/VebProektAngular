import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  //FillData
  FillDataAccount(obj): Observable<{}> {
    return this.http.post("www.goolge.com", obj).pipe();
  }

  FillFormAccount(obj): Observable<{}> {
    return this.http.post("www.goolge.com", obj).pipe();
  }

  SaveAccount(obj): Observable<{}> {
    switch (obj['id']) {
      case 0:
        return this.http.post("www.google.con", obj).pipe();
      default:
        return this.http.put("www.google.con", obj).pipe();
    }

  }
}
