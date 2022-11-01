import { Pipe, PipeTransform } from '@angular/core';
import {removeDiacritics} from './accent'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filterString:string, propName:string) {
    
    if(value === 0 || filterString === ""){
      return value
    }
    // let resArr = []
    // for(let item of value){
      // console.log(item[propName]);
      // console.log(filterString);
      // let itemName =item[propName].toLowerCase();
      let fltStr =removeDiacritics(filterString).toLowerCase().replace(/\s+/g, '')

      let res = value.filter((data:any) => removeDiacritics(data[propName]).toLowerCase().replace(/\s+/g, '').includes(fltStr))
      // if(itemName == fltStr){
      //   // console.log(item);
      //   resArr.push(item);
      // }
    // }

   
  
    return res;
  }

}
