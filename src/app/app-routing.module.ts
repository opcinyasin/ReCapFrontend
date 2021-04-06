import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},

  {path: 'car', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},

 // {path: 'brands', component: BrandComponent},

  {path: 'brand/:brandId', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},
  {path: 'color/:colorId', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},

  {path: 'car/add', loadChildren: () => import('./components/car-add/car-add.module').then(m => m.CarAddModule)},

  {
    path: 'account', children: [
      {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)}
    ]
  },

  {path: '**', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
