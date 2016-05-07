import {Component, OnInit} from '@angular/core';
import {HeroDetailComponent} from './hero-detail.component';
import { Router } from '@angular/router-deprecated';


import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    template: `
        <h2>My Heroes</h2>   
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero==selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <div *ngIf="selectedHero">
        <h2>
            {{selectedHero.name | uppercase}} is my hero
        </h2>
        <button (click)="gotoDetail()">View Details</button>
        </div>
    `,
    directives : [HeroDetailComponent],
    
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    
    
    
})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService : HeroService,
        private router: Router
        ){
        
    };
    
    ngOnInit(){
        console.log("on init()");
         this.getHeroes();  
    };
    
    title = 'Tour of heroes';
    
    public heroes: Hero[];
    
    getHeroes(){
        this.heroService.getHeroes().then(data=>{
            this.heroes = data;
        });
    };
    
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    
    selectedHero : Hero;
    onSelect(hero : Hero){
        this.selectedHero =hero;
    }
}
