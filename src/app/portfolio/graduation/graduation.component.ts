import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.css']
})
export class GraduationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavBg();
    this.changeMobileNavBg();
    // this.changeToggleColour();
  }

  changeNavBg(){
    var element = document.getElementById('portfolio-container');
    if(element != undefined)
    {
      element.classList.remove("bg-portrait", "bg-wedding");
      element.classList.add("bg-graduation");
    }
  }

  changeMobileNavBg(){
    var element = document.getElementById('mobile-nav');
    if(element != undefined)
    {
      element.classList.remove("bg-portrait", "bg-wedding");
      element.classList.add("bg-graduation");
    }
  }

  // changeToggleColour(){
  //   var element = document.getElementById('portfolio-toggle-btn');
  //   if(element != undefined)
  //   {
  //     element.style.backgroundImage = "url(" + "https://icon-library.com/icon/menu-icon-white-png-3.html.html" + ")";
  //   }
  // }
}
