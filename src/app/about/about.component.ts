import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>Here's some stuff about this site.</p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
