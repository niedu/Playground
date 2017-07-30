import { Component, Input } from '@angular/core';

import { Hero } from '../../objects/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
