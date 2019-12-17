import { Component, OnInit } from '@angular/core';
import { InfoService } from '../shared/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info = {};

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.info = this.infoService.getInfo();
  }

}
