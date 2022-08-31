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

  // primary navbar and links nav menu toggle for mobile
  onToggle(){
    const primaryNav = document.getElementById('portfolio-container');
    const linksNav = document.getElementById('links-container');
    const primaryNavToggle = document.querySelector('.portfolio-nav ul');
    const linksToggle = document.querySelector('.links-nav ul');

    const primaryNavVisibility = primaryNav?.getAttribute("data-visible");
    const linksNavVisibility = linksNav?.getAttribute("data-visible");

    if(primaryNavVisibility === "false")
    {
      primaryNav?.setAttribute("data-visible", "true");
      primaryNavToggle?.setAttribute("aria-expanded", "true");
    }
    else if(primaryNavVisibility === "true")
    {
      primaryNav?.setAttribute("data-visible", "false");
      primaryNavToggle?.setAttribute("aria-expanded", "false");
    }


    if(linksNavVisibility === "false")
    {
      linksNav?.setAttribute("data-visible", "true");
      linksToggle?.setAttribute("aria-expanded", "true");
    }
    else if(linksNavVisibility === "true")
    {
      linksNav?.setAttribute("data-visible", "false");
      linksToggle?.setAttribute("aria-expanded", "false");
    }
  }

}
