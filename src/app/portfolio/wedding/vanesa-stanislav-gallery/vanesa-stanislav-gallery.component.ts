import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanesa-stanislav-gallery',
  templateUrl: './vanesa-stanislav-gallery.component.html',
  styleUrls: ['./vanesa-stanislav-gallery.component.css']
})
export class VanesaStanislavGalleryComponent implements OnInit {

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
      (document.querySelector('.popup-image') as HTMLInputElement).style.display = 'block';
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
