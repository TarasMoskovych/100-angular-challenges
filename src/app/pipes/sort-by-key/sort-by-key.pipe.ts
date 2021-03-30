import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

  transform(arr: any[], key: string = '', asc: boolean = true): any[] {
    if (!arr) {
      return arr;
    }

    if (!Array.isArray(arr)) {
      throw new Error('Should be array');
    }

    return this.sort(arr, key, asc);
  }

  private sort(arr: any[], key: string, asc: boolean): any[] {
    const value = arr[0][key];

    switch (true) {
      case typeof value === 'string':
        return arr.sort((a: any, b: any) => asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]));
      case typeof value === 'number':
        return arr.sort((a: any, b: any) => asc ? a[key] - b[key] : b[key] - a[key]);
    }

    console.warn(`"${key}" does not exist in arr item`);
    return arr;
  }
}
