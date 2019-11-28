import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayUniqueItems'
})
export class ArrayUniqueItemsPipe implements PipeTransform {
  transform(array: any[], ...args: any[]): any {
    console.log('array::::', array);
    return [...new Set(array)];
    // return array.reduce((unique, item) => {
    //   return unique.includes(item) ? unique : [...unique, item];
    // }, []);
    // debugger;
    // return array.filter((item, index) => array.indexOf(item) === index);
  }
}
