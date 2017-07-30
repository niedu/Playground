import { Component, OnInit } from '@angular/core';

import { Hero } from '../../objects/hero';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = 'Top Heroes';
  heroes: Hero[] = [];

  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.HeroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
