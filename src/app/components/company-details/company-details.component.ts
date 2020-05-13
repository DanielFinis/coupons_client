import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public currentCompany = new Company;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    
   this.companiesService.getCompany().subscribe(company => {
      this.currentCompany = company;
    },error => {
      alert("Failed to get customer details");
    }
    )
  }
}
