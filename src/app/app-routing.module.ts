import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},

  {path: 'cars', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},

  {path: 'add', loadChildren: () => import('./components/car-add/car-add.module').then(m => m.CarAddModule)},

  {path: 'cardetails/:carId', loadChildren: () => import('./components/car-detail/car-detail.module').then(m => m.CarDetailModule)},

 // {path: 'brands', component: BrandComponent},

  {path: 'brand/:brandId', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},
  {path: 'color/:colorId', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},

  {
    path: 'account', children: [
      {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)}
    ]
  },

  //{path: '**', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
