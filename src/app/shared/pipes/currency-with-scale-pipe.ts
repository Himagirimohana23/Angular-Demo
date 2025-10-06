import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'currencyWithScale'
})
export class CurrencyWithScalePipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {
  }

  transform(value: number, currencyCode: string = 'INR'): string | null {
    if (value == null) return null;
    let scaledValue = value;
    let suffix = '';
    if(value>=1000){
      scaledValue = value/1000;
      suffix = 'K';
    }else if(value>=100000){
      scaledValue = value/100000;
      suffix = 'L';
    }
    else if(value>=10000000){
      scaledValue = value/10000000;
      suffix = 'Cr';
    }
    const formatted = this.currencyPipe.transform(scaledValue, currencyCode, 'symbol', '1.0-0');
    return value<1000 ? `` : `${formatted}${suffix}`;
  }

}
