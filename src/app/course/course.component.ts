import { Component, OnInit } from '@angular/core';
import { CouserService } from '../courses.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // component should not have any logic other than presentation logic
  // for other logic service( singleton -> single instance of a given object)
  sectionName = 'Course List.';

  courses;

  CarName = 'RollsRoyes';
  carImage = 'https://www.enterprise.co.uk/feo-cdn/j/b/-yfIRPM9M.webp';

  isActive = true;
  inputValue = 'asdf';
  inputValueAnother = 'asdfasdfasd';

  onDivClicked() {
    console.log('Div Clicked.');
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button Clicked.', $event);
  }

  onKeyUpCheck1() {
    console.log('Enter is pressed');
  }

  onKeyUpCheck2($event) {
    console.log($event.target.value);
  }

  onKeyUpCheck3(value) {
    console.log(value);
  }
  onKeyUpcheck4() {
    console.log(this.inputValue);
  }
  onKeyUpcheck5() {
    console.log(this.inputValueAnother);
  }

  getTitle() {
    return 'Here is 3 courses.';
  }

  constructor(courseService: CouserService) {    // have to add it in modules provider
    // const courseService = new CouserService();
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
    return this.sectionName;
  }

}
