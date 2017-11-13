import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CPPDATA } from '../../data/cppData';

@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CppComponent implements OnInit {

  cppdata = CPPDATA;

  constructor() { }

  ngOnInit() {
  }

}
