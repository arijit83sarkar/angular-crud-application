import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICustomer } from 'src/app/model/icustomer';
import { RestDataService } from 'src/app/service/rest-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  _customers: ICustomer[] = [];

  constructor(private _router: Router, private _restData: RestDataService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this._restData.getCustomers().subscribe((_response: any) => {
      this._customers = _response;
      console.log(this._customers);
    });
  }
}
