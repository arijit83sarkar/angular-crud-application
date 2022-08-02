import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './page/customer/customer.component';
import { CustomerAddComponent } from './page/customer-add/customer-add.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';

@NgModule({
  declarations: [AppComponent, CustomerComponent, CustomerAddComponent, CustomerEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
