import { Component, OnInit } from '@angular/core';
import { MatchDataService } from 'src/app/services/match-data-service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-edit',
  template: `
    <h3>{{ match.teamA.name }} vs. {{ match.teamB.name }}</h3>
    <h3>Date - {{match.date | date }}</h3>
    <h3>Time - {{match.date | date: 'shortTime' }} </h3>
    <h3>Stadium - {{match.stadium.name}} </h3>
    <h3 *ngIf="match?.referee?.name">Referee *If - {{match?.referee?.name}}</h3> <!-- safe navigation operator -->
    <h3 [hidden]="!match?.teamA.manager?.name">{{match.teamA.name}} Mgr {{ match?.teamA.manager?.name }}</h3>
    <h3 [hidden]="!match?.teamB.manager?.name">{{match.teamB.name}} Mgr {{ match?.teamB.manager?.name }}</h3>
    <button (click)="update()">Update</button>
  `,
  styles: []
})
export class MatchEditComponent implements OnInit {
  match:any;
  constructor(private matchData: MatchDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.match = this.matchData.getMatch(this.route.snapshot.params['id']);
  }

  update(){
    this.router.navigate(['/matches']);
    console.log("persist changes");
  }

}
