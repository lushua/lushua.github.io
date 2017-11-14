import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROMSDATA } from '../../data/romsData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RomsComponent implements OnInit {

  romsdata = ROMSDATA;

  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle('l7ssha Dev - Redmi Note 2');
  }

}
