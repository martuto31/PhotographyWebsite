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
  }

  changeNavBg(){
    var element = document.getElementById('portfolio-container');
    if(element != undefined)
    {
      element.style.backgroundColor = 'black';
    }
  }
}
