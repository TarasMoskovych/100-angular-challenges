import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(arr: string[], asc: boolean = true): string[] {
    if (!arr) {
      return arr;
    }

    if (!Array.isArray(arr)) {
      throw new Error('Should be array');
    }

    return arr.sort((a: string, b: string) => asc ? a.localeCompare(b) : b.localeCompare(a));
  }
}
