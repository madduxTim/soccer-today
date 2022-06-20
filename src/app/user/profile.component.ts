import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <h1>Edit</h1>
    <div>
      <h3>Edit stuff going here</h3>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
