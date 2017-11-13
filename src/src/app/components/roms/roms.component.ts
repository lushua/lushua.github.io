import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROMSDATA } from '../../data/romsData';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RomsComponent implements OnInit {

  romsdata = ROMSDATA;

  constructor() { }

  ngOnInit() {
  }

}
