import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register.component';
import {CheckUserGuard} from '../../guards/check-user.guard';

const routes: Routes = [ {path: '', component: RegisterComponent, canActivate: [CheckUserGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
