import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'customers',
    component: HomeComponent,
    data: { title: 'Customer List' }
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
