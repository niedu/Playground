import { Component } from '@angular/core';

import { Hero } from './objects/hero';
import { HeroService } from './services/hero-service';


@Component({
  selector: 'app-core',
  template: `<h1>{{title}}</h1>
             <a routerLink="/heroes">Heroes</a>
            <router-outlet></router-outlet>`,
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
}
