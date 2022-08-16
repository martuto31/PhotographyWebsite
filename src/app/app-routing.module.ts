import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraduationComponent } from './portfolio/graduation/graduation.component';
import { MeriGraduationComponent } from './portfolio/graduation/meri-graduation/meri-graduation.component';
import { VanesaGalleryComponent } from './portfolio/graduation/vanesa-gallery/vanesa-gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KatiGalleryComponent } from './portfolio/portrait/kati-gallery/kati-gallery.component';
import { KrisiGalleryComponent } from './portfolio/portrait/krisi-gallery/krisi-gallery.component';
import { PortraitComponent } from './portfolio/portrait/portrait.component';
import { VanesaStanislavGalleryComponent } from './portfolio/wedding/vanesa-stanislav-gallery/vanesa-stanislav-gallery.component';
import { WeddingComponent } from './portfolio/wedding/wedding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent, children:[
    {path: 'weddings', component: WeddingComponent},
    {path: 'weddings-vanesa-stanislav-gallery', component: VanesaStanislavGalleryComponent},
    {path: 'graduation', component: GraduationComponent},
    {path: 'graduation-meri-gallery', component: MeriGraduationComponent},
    {path: 'graduation-vanesa-gallery', component: VanesaGalleryComponent},
    {path: 'portrait', component: PortraitComponent},
    {path: 'portrait-krisi-gallery', component: KrisiGalleryComponent},
    {path: 'portrait-kati-gallery', component: KatiGalleryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
