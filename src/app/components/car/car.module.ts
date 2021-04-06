import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CarRoutingModule} from './car-routing.module';
import {CarComponent} from './car.component';
import {VatAddedPipe} from '../../pipes/vat-added.pipe';
import {FilterPipePipe} from '../../pipes/filter-pipe.pipe';


@NgModule({
  declarations: [CarComponent, VatAddedPipe,
    FilterPipePipe],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ]
})
export class CarModule {
}
