import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'match',
  template: `
    <h3>{{ match.teamA.name }} vs. {{ match.teamB.name }}</h3>
    <h3>Date - </h3>
    <h3>Time - </h3>
    <h3>Stadium - </h3>
    <button (click)="buyTicket()">Buy tickets!</button>
  `,
  styleUrls: ['./match.component.css']
})


export class MatchComponent implements OnInit {
  
  @Input() match: any;
  @Output() emitBuyTickets = new EventEmitter();
  
  ngOnInit(): void {
    // console.log(this.match);
  }

  buyTicket () {
    this.emitBuyTickets.emit(this.match);
    console.log("child click");
  }

templateVarTest(match: object){
  console.log('template variable example', match);
}

}
