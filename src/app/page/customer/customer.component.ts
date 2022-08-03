import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this._restData.getCustomers().subscribe({
      next: (_response: any) => {
        this._customers = _response;
        //console.log(this._customers);
      },
      error: (err: any) => {
        console.log('ERROR :: customer fetch :: ' + err);
      },
      complete: () => {
        console.log('Customer fetch completed.');
      },
    });
  }

  add(): void {
    this._router.navigate(['/customer-add']);
  }

  edit(id: number): void {
    this._router.navigate(['/customer-edit/' + id]);
  }

  delete(id: number): void {
    this._restData.deleteCustomer(id).subscribe({
      next: () => {
        this.getCustomers();
      },
      error: (err: any) => {
        console.log('ERROR :: customer delete :: ' + err);
      },
      complete: () => {
        console.log('Customer delete completed.');
      },
    });
  }
}
