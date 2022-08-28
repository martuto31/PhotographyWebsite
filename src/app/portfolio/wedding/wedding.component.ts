import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {

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
      element.classList.remove("bg-portrait", "bg-graduation");
      element.classList.add("bg-wedding");
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
      element.classList.remove("bg-portrait", "bg-graduation");
      element.classList.add("bg-wedding");
    }
  }
}
