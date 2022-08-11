import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WeddingComponent } from './portfolio/wedding/wedding.component';
import { PortraitComponent } from './portfolio/portrait/portrait.component';
import { GraduationComponent } from './portfolio/graduation/graduation.component';
import { VanesaStanislavGalleryComponent } from './portfolio/wedding/vanesa-stanislav-gallery/vanesa-stanislav-gallery.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { MeriGraduationComponent } from './portfolio/graduation/meri-graduation/meri-graduation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideshowComponent,
    PortfolioComponent,
    WeddingComponent,
    PortraitComponent,
    GraduationComponent,
    VanesaStanislavGalleryComponent,
    MeriGraduationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
