import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ng-for',
  templateUrl: './my-ng-for.component.html',
  styleUrls: ['./my-ng-for.component.css']
})

export class MyNgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses: Courses[] = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    { id: 3, title: 'Course 3' }
    { id: 4, title: 'Course 4' }
  ]

  onTrash(course: Courses) {
    const index = this.courses.indexOf(course);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

}

export interface Courses {
  id: number,
  title: string
}
