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
  {path: '', component: HomeComponent },
  {path: 'speakers', component: SpeakersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
