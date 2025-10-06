import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signedNumber'
})
export class SignedNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return '';
    return value >= 0 ? `+${value}` : value.toString();
  }

}
