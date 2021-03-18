import {Pipe, PipeTransform} from '@angular/core';
import {CarDto} from '../models/Dtos/carDto';
import {Car} from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    // filterText = filterText ? filterText.toLocaleLowerCase() : "";
    // return filterText ? value.filter((p: CarDto) => p.brandName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;

    if(!filterText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data,filterText));
  }

  matchValue(data:CarDto, value:string) {
    return Object.keys(data).map((key) => {
      // @ts-ignore
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);


  }

}
