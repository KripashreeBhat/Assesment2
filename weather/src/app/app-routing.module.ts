import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogremoveComponent } from './dialogremove/dialogremove.component';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './home/home.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';
const routes: Routes = [
 {path: '', component: HomeComponent},
 { path : 'home', component: HomeComponent},
 { path :'fav', component: FavComponent},
 {path: 'recent',component:RecentsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  HomeComponent,
  FavComponent,
  RecentsearchComponent
]