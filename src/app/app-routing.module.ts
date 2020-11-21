import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './screens/home/home.component';
import {SpeakersComponent} from './screens/speakers/speakers.component';

const routes: Routes = [
  // {
  //   path: '', component: AppComponent, children: [
  //     {path: '', component: HomeComponent }
  //   ],
  // },
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'speakers', component: SpeakersComponent },
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
