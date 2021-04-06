import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {CheckUserGuard} from '../../guards/check-user.guard';

const routes: Routes = [{path: '', component: LoginComponent, canActivate: [CheckUserGuard]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
