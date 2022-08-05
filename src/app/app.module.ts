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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideshowComponent,
    PortfolioComponent,
    WeddingComponent,
    PortraitComponent,
    GraduationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
