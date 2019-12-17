import { Component, OnInit } from '@angular/core';
import { InfoService } from '../shared/info.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.courses = this.infoService.getCourses();

  }

}
