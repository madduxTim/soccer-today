import { Component, OnInit } from '@angular/core';
import { MatchDataService } from 'src/app/services/match-data-service';

@Component({
  selector: 'matches',
  template: `
  <h1 id="today-date">{{ getDate() | date }}</h1>

  <hr>
  
  <!--MATCHES BEBE! -->
  <match *ngFor="let match of matches.result" [match]="match" #matchChild (emitBuyTickets)="parentFnClickName($event)"></match>
  <!-- <button (click)="matchChild.templateVarTest(matches)">Template Var Test</button> -->
  `,
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  matches:any;

  constructor(private matchService: MatchDataService) { 
  }

  ngOnInit(): void {
    // console.log(this.match1);
    this.matches = this.matchService.getmatches();
  }

  parentFnClickName(data: object){
    console.log("parent bubble up!", data);
  }

  getDate(){
    return new Date();
  }
  
}
