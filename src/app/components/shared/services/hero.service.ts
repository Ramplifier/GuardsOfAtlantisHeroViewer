import { Injectable } from '@angular/core';
import * as jsonData from '../../../../assets/hero.json';
import {BehaviorSubject} from 'rxjs';
import heroes from '../../../../assets/hero.json';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  subject = new BehaviorSubject(jsonData);
  giveHeroes(){
    return heroes;
  }

}
