import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krisi-gallery',
  templateUrl: './krisi-gallery.component.html',
  styleUrls: ['./krisi-gallery.component.css']
})
export class KrisiGalleryComponent implements OnInit {

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
        imgs[i].addEventListener("click", function(el){
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

}
