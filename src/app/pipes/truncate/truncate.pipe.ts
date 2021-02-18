import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length = 100): string {
    let newValue =  value.slice(0, length);

    if (value.length > length) {
      newValue += '...'
    }

    return newValue;
  }
}
