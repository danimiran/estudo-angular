import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let result = '';

    for (let palavra of values){
      result += this.capitalize(palavra) + ' ';
    }
    return result;
  }

  capitalize(value: string) {
    return value.substring(0,1).toUpperCase() + //pega a primeira letra e transforma em maiusculo
    value.substring(1).toLowerCase();
  }

}
