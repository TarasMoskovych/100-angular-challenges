import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(arr: string[], term?: string): string[] {
    if (!term) {
      return arr;
    }

    return arr.filter((value: string) => value.toLowerCase().includes(term.toLowerCase()));
  }
}
