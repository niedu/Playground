import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}</h1>
            <app-my-heroes></app-my-heroes>`,
})

export class AppComponent {
  title = 'Tour of Heroes';
}
