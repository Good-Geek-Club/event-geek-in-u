import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {SpeakersComponent} from './screens/speakers/speakers.component';
import {QuotaComponent} from './screens/quota/quota.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'speakers', component: SpeakersComponent },
  {path: 'quota', component: QuotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
