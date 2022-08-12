import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    const primaryNav = document.getElementById('portfolio-container');
    const navToggle = document.querySelector('.portfolio-nav ul');

    const visibility = primaryNav?.getAttribute("data-visible");

    if(visibility === "false")
    {
      primaryNav?.setAttribute("data-visible", "true");
      navToggle?.setAttribute("aria-expanded", "true");
    }
    else if(visibility === "true")
    {
      primaryNav?.setAttribute("data-visible", "false");
      navToggle?.setAttribute("aria-expanded", "fa;se");
    }
    console.log(visibility);
  }

}
