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
  }

  changeNavBg(){
    var element = document.getElementById('portfolio-container');
    if(element != undefined)
    {
      element.style.backgroundColor = '#D2738f';
    }
  }
}
