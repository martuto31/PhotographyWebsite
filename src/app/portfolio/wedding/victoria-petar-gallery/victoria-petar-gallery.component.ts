import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-victoria-petar-gallery',
  templateUrl: './victoria-petar-gallery.component.html',
  styleUrls: ['./victoria-petar-gallery.component.css']
})
export class VictoriaPetarGalleryComponent implements OnInit {

  public id: number = 1;
  public maxId: number = 66;

  constructor() { }

  ngOnInit(): void {
    this.imagePopup();
  }

  imagePopup(){
    var imgs = document.getElementsByClassName('img');
    for(var i = 0; i < imgs.length; i++)
    {
      if(imgs[i] != undefined)
      {
        imgs[i].addEventListener("click", (el: any) => {
          this.id = parseInt(el.target.id);
          popUp(el);
        }, false)
      }
    }

    function popUp(el: any){
      (document.querySelector('.popup-image') as HTMLInputElement).style.display = 'flex';
      var imageSrc = (document.getElementById(el.target.id) as HTMLImageElement).src;
      if(imageSrc != undefined)
      {
        document.getElementById('popup-image')?.setAttribute('src', imageSrc);
      }
    }
  }

  closePopup(){
    var popUpImage = document.getElementById('popup-image-div');
    
    if(popUpImage != undefined)
    {
      popUpImage.style.display = 'none';
    }
  }

  nextImage(){
    if((this.id + 1) > this.maxId)
    {
      this.id = 1;
    }
    else
    {
      this.id++;
    }
    var nextImageSrc = (document.getElementById(this.id.toString()) as HTMLImageElement).src;

    if(nextImageSrc != undefined)
    {
      document.getElementById('popup-image')?.setAttribute('src', nextImageSrc);
    }
  }

  previousImage(){
    if((this.id - 1) < 1)
    {
      this.id = this.maxId;
    }
    else
    {
      this.id--;
    }
    var previousImageSrc = (document.getElementById(this.id.toString()) as HTMLImageElement).src;

    if(previousImageSrc != undefined)
    {
      document.getElementById('popup-image')?.setAttribute('src', previousImageSrc);
    }
  }
}
