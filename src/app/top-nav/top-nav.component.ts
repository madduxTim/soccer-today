import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-nav',
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['/matches']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [`
  a.active {
    color: red !important;
  }
  `]
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
