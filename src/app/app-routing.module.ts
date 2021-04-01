import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import {CarAddComponent} from './components/car-add/car-add.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './guards/login.guard';
import {RegisterComponent} from './components/register/register.component';
import {CheckUserGuard} from './guards/check-user.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"brands", component:BrandComponent},
  {path:"brand/:brandId", component:CarComponent},
  {path:"color/:colorId", component:CarComponent},
  {path:"car/add", component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent,canActivate:[CheckUserGuard]},
  {path:"register",component:RegisterComponent,canActivate:[CheckUserGuard]},
  {path:"**",component:CarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
