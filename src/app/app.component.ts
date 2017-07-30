import { Component } from '@angular/core';

import { Hero } from './objects/hero';
import { HeroService } from './services/hero-service';

@Component({
  selector: 'app-core',
  template: `<h1>{{title}}</h1>
             <nav>
             <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
             <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
             <nav>
             <router-outlet></router-outlet>`,
  providers: [HeroService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
}
