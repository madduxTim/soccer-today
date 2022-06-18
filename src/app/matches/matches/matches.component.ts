import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matches',
  template: `
  <h1 id="today-date">{{ match1.result[0].date | date }}</h1>

  <hr>
  
  <!--MATCHES BEBE! -->
  <match [match]="match1.result[0]" #matchChild (emitBuyTickets)="parentFnClickName($event)"></match>
  <button (click)="matchChild.templateVarTest(match1)">Template Var Test</button>
  `,
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {

  // constructor() { }

  // ngOnInit(): void {
  //   // console.log(this.match1);
  // }

  parentFnClickName(data: object){
    console.log("parent bubble up!", data);
  }

  match1 = {
    "result": [
      {
        "id": "4a86435e2cd33386",
        "date": "2022-03-04 00:00:00",
        "status": "ENDED",
        "timer": "90:00",
        "championship": {
          "id": "8a4915ec855f52ba",
          "name": "Brazil Campeonato Acreano",
          "s_name": "Campeonato Acreano 2022"
        },
        "teamA": {
          "id": "745bb0347fa00506",
          "name": "Atletico Acreano",
          "score": {
            "f": "2",
            "1h": null,
            "2h": "2",
            "o": null,
            "p": null
          },
          "stats": {
            "possession": null,
            "attacks": {
              "n": null,
              "d": null,
              "o_s": null
            },
            "shoots": {
              "t": "0",
              "off": null,
              "on": null,
              "g_a": null
            },
            "penalties": null,
            "corners": {
              "t": null,
              "f": null,
              "h": null
            },
            "fouls": {
              "t": null,
              "y_c": null,
              "y_t_r_c": null,
              "r_c": null
            },
            "substitutions": null,
            "throwins": null,
            "injuries": null,
            "dominance_avg_2_5": null
          },
          "manager": null
        },
        "teamB": {
          "id": "c254ca4fd0ccd9af",
          "name": "Vasco da Gama AC",
          "score": {
            "f": "1",
            "1h": null,
            "2h": "1",
            "o": null,
            "p": null
          },
          "stats": {
            "possession": null,
            "attacks": {
              "n": null,
              "d": null,
              "o_s": null
            },
            "shoots": {
              "t": "0",
              "off": null,
              "on": null,
              "g_a": null
            },
            "penalties": null,
            "corners": {
              "t": null,
              "f": null,
              "h": null
            },
            "fouls": {
              "t": null,
              "y_c": null,
              "y_t_r_c": null,
              "r_c": null
            },
            "substitutions": null,
            "throwins": null,
            "injuries": null,
            "dominance_avg_2_5": null
          },
          "manager": null
        },
        "events": [],
        "dominance_index": [],
        "referee": null,
        "stadium": {
          "id": "50abc1794bf2f3a4",
          "name": "Estadio Antonio Aquino Lopes"
        }
      }
    ]
  }
}
