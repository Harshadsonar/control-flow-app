import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true
})
export class CountrycodePipe implements PipeTransform {

  transform(value: string, country?:string): string {
    let code = "+91-";
    if(country == "USA") code = "+1-";
    // console.log(value);
    return code + value;
  }

}
