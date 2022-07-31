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
        `ERROR Code :: ${error.status}, ` + `Message :: ${error.error}`
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
}
