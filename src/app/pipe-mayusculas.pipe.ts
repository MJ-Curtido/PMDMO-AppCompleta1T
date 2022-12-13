import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMayusculas'
})
export class PipeMayusculasPipe implements PipeTransform {

  transform(value: String): unknown {
    return value.toUpperCase();
  }
}