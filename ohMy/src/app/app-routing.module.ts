import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ActorCardComponent } from './main/content-actor/actor-card/actor-card.component';
import { ContentActorComponent } from './main/content-actor/content-actor.component';
import { CardComponent } from './main/content/card/card.component';
import { ContentComponent } from './main/content/content.component';
import { DetailActorComponent } from './main/detail-actor/detail-actor.component';
import { DetailComponent } from './main/detail/detail.component';

const routes: Routes = [
  {path:"", component:ContentComponent},
  {path:"actor", component:ContentActorComponent},
  {path:"movies/detail/:id", component:DetailComponent},
  {path:"actor/detail/:id", component:DetailActorComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
