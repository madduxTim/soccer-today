import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatchDataService } from './services/match-data-service';
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { AboutComponent } from './about/about.component';
import { Error404pageComponent } from './error/error404page/error404page.component';
import { MatchRouteActivator } from './services/match-route-activator-service';
import {MatchesResolver } from './services/matches-resolver-service';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchComponent,
    TopNavComponent,
    MatchEditComponent,
    AboutComponent,
    Error404pageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MatchDataService,
    MatchRouteActivator,
    MatchesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
