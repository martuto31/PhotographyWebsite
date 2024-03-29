import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public slideIndex: number = 1;

  nextSlideShow() {
    var slides = document.getElementById("slides");
    this.slideIndex++;
    var slidesNumber = 4;
  
    if (this.slideIndex > slidesNumber) {
      this.slideIndex = 1;
    }
  
    slides?.classList.add("bg-" + this.slideIndex);
    
    setTimeout(() => {
      for (let i = 1; i <= slidesNumber; i++) {
        if (i !== this.slideIndex) {
          slides?.classList.remove("bg-" + i);
        }
      }
    }, 200);
  }
  
  previousSlideShow() {
    var slides = document.getElementById("slides");
    this.slideIndex--;
    var slidesNumber = 4;
  
    if (this.slideIndex < 1) {
      this.slideIndex = slidesNumber;
    }
  
    slides?.classList.add("bg-" + this.slideIndex);
  
    setTimeout(() => {
      for (let i = 1; i <= slidesNumber; i++) {
        if (i !== this.slideIndex) {
          slides?.classList.remove("bg-" + i);
        }
      }
    }, 200);
  }

  makeNavbarActive(id: number){ 
    var navs = document.getElementsByClassName("pricing-nav-bootstrapModify") as HTMLCollectionOf<HTMLElement>;
  
    for(var i = 0; i < navs.length; i++)
    {
      navs[i].classList.remove("pricing-nav-active");
    }
    navs[id].classList.add("pricing-nav-active");
  }

  //Hamburger menu
  onToggle(){
    const primaryNav = document.getElementById('home-nav');
    const navToggle = document.querySelector('.mobile-nav-toggle');

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
  }
}
