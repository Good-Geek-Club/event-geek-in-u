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
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './screens/home/location/location.component';
import { SponsorsComponent } from './screens/home/sponsors/sponsors.component';
import {CommonModule} from '@angular/common';
import { PricingComponent } from './screens/home/pricing/pricing.component';
import { RewardComponent } from './screens/home/reward/reward.component';
import { QuotaComponent } from './screens/quota/quota.component';
import { QuotaContentComponent } from './components/quota-content/quota-content.component';

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
    SponsorsComponent,
    PricingComponent,
    RewardComponent,
    QuotaComponent,
    QuotaContentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
