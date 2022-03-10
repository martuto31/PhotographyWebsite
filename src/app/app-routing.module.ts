import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeddingPhotoshootComponent } from './wedding-photoshoot/wedding-photoshoot.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'wedding-service', component: WeddingPhotoshootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
