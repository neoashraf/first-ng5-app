import { Component, OnInit } from '@angular/core';
import { CouserService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  sectionName = 'Course List.';
  // component should not have any logic other than presentation logic
  // for other logic service( singleton -> single instance of a given object)
  courses;
  constructor(courseService: CouserService) {    // have to add it in modules provider
    // const courseService = new CouserService();
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
    return this.sectionName;
  }

  getTitle() {
    return 'Here is 3 courses.';
  }

}
