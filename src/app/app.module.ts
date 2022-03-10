import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeddingPhotoshootComponent } from './wedding-photoshoot/wedding-photoshoot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeddingPhotoshootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
