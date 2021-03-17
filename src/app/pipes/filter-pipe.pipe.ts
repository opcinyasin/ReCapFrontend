import {Pipe, PipeTransform} from '@angular/core';
import {CarDto} from '../models/Dtos/carDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((p: CarDto) => p.brandName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
