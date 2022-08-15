import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavBg();
    this.changeToggleColour();
  }

  changeNavBg(){
    var element = document.getElementById('portfolio-container');
    if(element != undefined)
    {
      element.style.backgroundColor = '#D2738f';
    }
  }

  changeToggleColour(){
    var element = document.getElementById('portfolio-toggle-btn');
    if(element != undefined)
    {
      element.style.color = 'black';
    }
  }
}
