import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PROJECTSDATA } from '../../data/projectsData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  title = 'Live projects';
  projectdata = PROJECTSDATA;
  constructor() { }

  ngOnInit() {
  }

}
