import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'angular-data-interpolation';
  title2 = 'angular-property-binding';

  //imgURL = "https://loremflickr.com/320/240";
  imgURL = "assets/img/sample.jpg";

  colSpan = 3;
  isActiveButton = true;
  isActiveSpan = false;

  onSave(event: Event)
  {
    event.stopPropagation(); //stop event bubbling
    console.log("Button clicked!", event);
  }

  onDivclicked()
  {
    console.log("DIV clicked!");
  }

  enterPressed()
  {
    console.log("Enter was pressed");
  }

  takeValueFromInput(email: string)
  {
    console.log(email);
  }


  email2:string = "test";
  //two way binding
  onKeyUp()
  {
    console.log(this.email2);
  }

  course = {
    title: "Angular Course",
    price: 150,
    rating: 4.789,
    students: 30578,
    releaseDate: new Date(2022,11,24) //remember that months are counted from 0 to 11
  }

  longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}
