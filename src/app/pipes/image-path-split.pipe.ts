import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePathSplit'
})
export class ImagePathSplitPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    return value.split(separator).pop();
  }

}
