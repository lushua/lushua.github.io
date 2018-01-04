import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SECTIONSDATA } from '../../data/sectionsData';
import { Title } from '@angular/platform-browser';
import { MOTDS } from '../../data/motdsData';
import { POSTSDATA } from '../../data/postsData';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  title = 'l7ssha Dev';
  motd = MOTDS[Math.floor(Math.random() * MOTDS.length)];
  sections = SECTIONSDATA;
  posts = POSTSDATA.reverse();

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle(this.title);
  }

}
