import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero: any;


  constructor() {
    console.log(this.hero)
  }

}
