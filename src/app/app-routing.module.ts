import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { MatchesComponent } from './matches/matches.component';
import { AboutComponent } from "./about/about.component";
import { Error404pageComponent } from './error/error404page/error404page.component';
import { MatchRouteActivator } from './services/match-route-activator-service';
import { MatchesResolver } from './services/matches-resolver-service';

const routes: Routes = [
  { path: '404', component:Error404pageComponent },
  { path: 'matches', component: MatchesComponent, resolve: {matches: MatchesResolver} },
  { path: 'about', component: AboutComponent },
  { path: 'matches/:id', component: MatchEditComponent, canActivate: [MatchRouteActivator] },
  { path: '', redirectTo: "matches", pathMatch: 'full' },
  { 
    path: 'user',
    loadChildren: () => import('../app/user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
