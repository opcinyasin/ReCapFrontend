import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: string, rate: number): number {
    return rate !== 0 ? parseInt(value) + parseInt(value) * rate / 100 : parseInt(value);
  }

}
