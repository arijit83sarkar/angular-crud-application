import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ICustomer } from '../model/icustomer';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  private BASE_REST_API_URL: string = 'http://localhost:8080';

  constructor(private _httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('ERROR :: ', error.error.message);
    } else {
      console.error(
        `ERROR Code :: ${error.status}, ` + `Message :: ${error.error.message}`
      );
    }
    return throwError('Please try again!!!');
  }

  public getCustomers(): Observable<any> {
    return this._httpClient
      .get<ICustomer>(this.BASE_REST_API_URL + '/api/customer/getAllCustomer')
      .pipe(catchError(this.handleError));
  }

  public getCustomer(customerNumber: number): Observable<any> {
    return this._httpClient
      .get<ICustomer>(
        this.BASE_REST_API_URL + '/api/customer/' + customerNumber
      )
      .pipe(catchError(this.handleError));
  }

  public saveCustomer(customer: any): Observable<any> {
    return this._httpClient
      .post(this.BASE_REST_API_URL + '/api/customer/save', customer)
      .pipe(catchError(this.handleError));
  }

  public updateCustomer(
    customerNumber: number,
    customer: ICustomer
  ): Observable<any> {
    return this._httpClient
      .put<ICustomer>(
        this.BASE_REST_API_URL + '/api/customer/update/' + customerNumber,
        customer
      )
      .pipe(catchError(this.handleError));
  }

  public deleteCustomer(customerNumber: number): Observable<any> {
    return this._httpClient
      .delete(this.BASE_REST_API_URL + '/api/customer/delete/' + customerNumber)
      .pipe(catchError(this.handleError));
  }
}
