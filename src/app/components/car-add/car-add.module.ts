import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarAddRoutingModule } from './car-add-routing.module';
import {CarAddComponent} from './car-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CarAddComponent],
  imports: [
    CommonModule,
    CarAddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarAddModule { }
