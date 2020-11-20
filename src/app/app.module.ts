import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SpeakersComponent } from './screens/speakers/speakers.component';
import { InfoComponent } from './screens/home/info/info.component';
import { HeadComponent } from './screens/home/head/head.component';
import { AgendaComponent } from './screens/home/agenda/agenda.component';
import { DescriptionComponent } from './screens/home/description/description.component';
import { FooterComponent } from './screens/home/footer/footer.component';
import { LocationComponent } from './screens/home/location/location.component';
import { SponsorsComponent } from './screens/home/sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SpeakersComponent,
    InfoComponent,
    HeadComponent,
    AgendaComponent,
    DescriptionComponent,
    FooterComponent,
    LocationComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
