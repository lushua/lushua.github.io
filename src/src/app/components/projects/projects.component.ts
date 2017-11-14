import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PROJECTSDATA } from '../../data/projectsData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  title = 'Live projects';
  projectdata = PROJECTSDATA;

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle('l7ssha Dev - Projects');
  }

}
