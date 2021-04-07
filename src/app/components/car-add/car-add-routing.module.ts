import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarAddComponent} from './car-add.component';
import {LoginGuard} from '../../guards/login.guard';

const routes: Routes = [{path: '', component: CarAddComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarAddRoutingModule {
}
