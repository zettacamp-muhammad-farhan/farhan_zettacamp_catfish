import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custChar'
})
export class CustCharPipe implements PipeTransform {
  transform(value:any) {
    // return custChar(value).toLowerCase()
  }

}
