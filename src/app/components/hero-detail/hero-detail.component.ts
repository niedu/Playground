import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../../services/hero-service';
import { Hero } from '../../objects/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.components.css' ],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
  }
}
