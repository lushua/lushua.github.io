import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SECTIONSDATA } from '../../data/sectionsData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  title = 'l7ssha Dev';
  motd = 'It can\' go simpler anymore';
  sections = SECTIONSDATA;

  public constructor(private titleService: Title ) { }
  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle(this.title);
  }

}
