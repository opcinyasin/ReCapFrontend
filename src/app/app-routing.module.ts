import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"brands", component:BrandComponent},
  {path:"brand/:brandId", component:CarComponent},
  {path:"color/:colorId", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
