import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RestDataService } from 'src/app/service/rest-data.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  _customerForm: any;
  _submitted = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _restData: RestDataService
  ) {}

  ngOnInit(): void {
    this._customerForm = this._formBuilder.group({
      fullName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  get customerForm() {
    return this._customerForm.controls;
  }

  saveCustomer(): void {
    this._submitted = true;

    // stop here if form is invalid
    if (this._customerForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this._customerForm.value));
    const data: any = {};
    data['customerNumber'] = '0';
    data['fullName'] = this._customerForm.get('fullName').value;
    data['phone'] = this._customerForm.get('phone').value;
    data['address'] = this._customerForm.get('address').value;
    data['state'] = this._customerForm.get('state').value;
    data['country'] = this._customerForm.get('country').value;

    this._restData.saveCustomer(JSON.stringify(data)).subscribe({
      next: (_response: any) => {
        console.log(_response);
      },
      error: (err: any) => {
        console.log('ERROR :: customer save :: ' + err);
      },
      complete: () => {
        console.log('Customer fetch completed.');
      },
    });
  }
}
