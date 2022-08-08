import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GraduationComponent } from './portfolio/graduation/graduation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortraitComponent } from './portfolio/portrait/portrait.component';
import { VanesaStanislavGalleryComponent } from './portfolio/wedding/vanesa-stanislav-gallery/vanesa-stanislav-gallery.component';
import { WeddingComponent } from './portfolio/wedding/wedding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent, children:[
    {path: 'weddings', component: WeddingComponent},
    {path: 'weddings-vanesa-stanislav-gallery', component: VanesaStanislavGalleryComponent},
    {path: 'graduation', component: GraduationComponent},
    {path: 'portrait', component: PortraitComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
