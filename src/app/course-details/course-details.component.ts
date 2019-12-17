import { Component, OnInit } from '@angular/core';
import { InfoService } from '../shared/info.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: any;

  constructor(private infoService: InfoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const url = this.route.snapshot.params['url'];
    this.course = this.infoService.getCourse(url);
  }

  goBack(){
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
