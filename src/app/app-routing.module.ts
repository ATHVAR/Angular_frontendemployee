import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:'add',component:EmployeeformComponent},{path:'home',component:HomeComponent},{ path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
