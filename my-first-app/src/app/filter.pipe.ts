import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: string,
  filterString: string,propName:string): unknown {
    const result = [];
    if(value?.length === 0 || filterString==''){
      return value;
    }
    for(const item of value){
      if(item[propName] === filterString){
        result.push(item)
      }
    }
    return result;
  }

}
