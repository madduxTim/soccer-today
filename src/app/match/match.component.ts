import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'match',
  template: `
    <a [routerLink]="['/matches', match.id]">{{ match.teamA.name }} vs. {{ match.teamB.name }}</a>
    <h3>Date - {{match.date | date }}</h3>
    <h3>Time - {{match.date | date: 'shortTime' }} </h3>
    <h3>Stadium - {{match.stadium.name}} </h3>
    <h3 *ngIf="match?.referee?.name">Referee *If - {{match?.referee?.name}}</h3> <!-- safe navigation operator -->
    <h3 [hidden]="!match?.teamA.manager?.name">{{match.teamA.name}} Mgr {{ match?.teamA.manager?.name }}</h3>
    <h3 [hidden]="!match?.teamB.manager?.name">{{match.teamB.name}} Mgr {{ match?.teamB.manager?.name }}</h3>
    <h3 [class.green]="simpleCheck()">League - {{match.championship.name}}
    <button (click)="buyTicket()">Buy tickets!</button>
  `,
  styleUrls: ['./match.component.css']
})


export class MatchComponent implements OnInit {
  
  @Input() match: any;
  @Output() emitBuyTickets = new EventEmitter();
  
  ngOnInit(): void {
    console.log(this.match);
  }

  buyTicket () {
    this.emitBuyTickets.emit(this.match);
    console.log("child click");
  }

templateVarTest(match: object){
  console.log('template variable example', match);
}

simpleCheck = () => {
  return true;
}

}
