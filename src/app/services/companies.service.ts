import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http:HttpClient) { }

  public getCompany(): Observable<Company>
  {
    return this.http.get<Company>("http://localhost:8080/companies/byId");
  }
}
