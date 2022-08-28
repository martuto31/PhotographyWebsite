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
    this.changeMobileNavBg();
  }

  changeNavBg(){
    var element = document.getElementById('portfolio-container');
    if(element != undefined)
    {
      element.classList.remove("bg-graduation", "bg-wedding");
      element.classList.add("bg-portrait");
    }
  }

  changeToggleColour(){
    var element = document.getElementById('portfolio-toggle-btn');
    if(element != undefined)
    {
      element.style.color = 'black';
    }
  }

  changeMobileNavBg(){
    var element = document.getElementById('mobile-nav');
    if(element != undefined)
    {
      element.classList.remove("bg-graduation", "bg-wedding");
      element.classList.add("bg-portrait");
    }
  }
}
