import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailRoutingModule } from './car-detail-routing.module';
import {CarDetailComponent} from './car-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImagePathSplitPipe} from '../../pipes/image-path-split.pipe';


@NgModule({
  declarations: [CarDetailComponent,ImagePathSplitPipe],
  imports: [
    CommonModule,
    CarDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarDetailModule { }
