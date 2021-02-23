import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten'
})
export class FlattenPipe implements PipeTransform {

  transform(arr: any[]): any[] {
    return this.flatten(arr);
  }

  private flatten(arr: any[]): any[] {
    return arr.reduce((acc: any[], item: any) => acc.concat(Array.isArray(item) ? this.flatten(item) : item), []);
  }
}
