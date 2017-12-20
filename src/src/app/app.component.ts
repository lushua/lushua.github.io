import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionData, SECTIONSDATA } from './data/sectionsData';
import { Routes } from '@angular/router';
import { CppComponent } from './components/cpp/cpp.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'l7ssha Dev';
  motd = 'It can\' go simpler anymore';

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle('l7ssha Dev');
  }

}
