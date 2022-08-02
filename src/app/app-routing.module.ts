import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './page/customer-add/customer-add.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { CustomerComponent } from './page/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'customer-add',
    component: CustomerAddComponent,
  },
  {
    path: 'customer-edit/:customerNumber',
    component: CustomerEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
