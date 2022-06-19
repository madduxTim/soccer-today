import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatchDataService } from './services/match-data-service';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MatchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
