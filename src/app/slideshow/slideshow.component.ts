import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slideShow(0);
  }

  slideShow(n: number){
    var slides = document.getElementsByClassName("slides") as HTMLCollectionOf<HTMLElement>;
    var slideIndex = n;

    for(var i = 0; i < slides.length; i++)
    {
      slides[i].style.display = "none";
    }

    slideIndex++;
    //only works with 3 pictures, FIX NEEDED!! - Bad practice
    if(slideIndex > slides.length)
    {
      slideIndex = 1;
    }
    console.log(slideIndex - 1);
    console.log(slideIndex);
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(() => {this.slideShow(slideIndex)}, 5000);
  }

  makeNavbarActive(id: number){ 
    var navs = document.getElementsByClassName("pricing-nav-bootstrapModify") as HTMLCollectionOf<HTMLElement>;
  
    for(var i = 0; i < navs.length; i++)
    {
      navs[i].classList.remove("pricing-nav-active");
    }
    navs[id].classList.add("pricing-nav-active");
  }

  // currentSlide(n: number) {
  //   this.slideShow(n);
  // }
}
