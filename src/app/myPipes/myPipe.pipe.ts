import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'myPipe'
})

export class MyPipe implements PipeTransform{
  transform(value: string, limit?: number) {
    if(!value){ return null;  }
    let actualLimit: number = (limit)? limit : 100;
    return `${value.substring(0, actualLimit)}...`;
  }
}
