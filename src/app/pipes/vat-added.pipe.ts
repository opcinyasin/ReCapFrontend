import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: string, rate: number): number {
    return parseInt(value) + parseInt(value) * rate / 100;
  }

}
