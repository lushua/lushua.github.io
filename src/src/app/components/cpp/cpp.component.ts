import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CPPDATA } from '../../data/cppData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CppComponent implements OnInit {

  cppdata = CPPDATA;

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle('l7ssha Dev - C++ projects');
  }

}
