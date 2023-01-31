import { STRING_TYPE } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let finalResult: string = "";
    let splitted = value.split(" ");
    //console.log("Splitted array: " + splitted);
    splitted.forEach(element =>
      {
        let temp = element.toLowerCase();
        if(temp != "of" && temp != "the")
        {
          temp = temp.charAt(0).toUpperCase()+ temp.slice(1);
        }
        //console.log("Element after changes: " + element);
        finalResult = finalResult + temp + " ";
        //console.log("Current final result: " + finalResult);
        //console.log("----------------------------");
      }
    )
    return finalResult;
  }

}
