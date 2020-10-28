import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MapComponent} from './components/map/map.component';



@NgModule({
  imports: [
    BrowserModule,
    MatCarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANsMUgTON1gtAx6okd1VWPEhmpZb2-3A0'
    }),
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
