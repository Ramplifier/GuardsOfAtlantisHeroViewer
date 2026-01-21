import {Component, inject, OnInit} from '@angular/core';
import {HeroCard} from '../../hero-card/hero-card';
import {HeroService} from '../../shared/services/hero.service';

@Component({
  selector: 'app-hero-wiki',
  imports: [HeroCard],
  templateUrl: './hero-wiki.html',
  styleUrl: './hero-wiki.css',
})
export class HeroWiki implements OnInit{
  heroService = inject(HeroService);
  heroes:any = [];

  ngOnInit(): void {
    this.heroes = this.heroService.giveHeroes();
    console.log(this.heroService.giveHeroes())
  }

}

