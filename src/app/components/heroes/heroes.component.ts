import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HeroesService, Heroe } from '../servicios/heroes.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    // console.log("contructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
