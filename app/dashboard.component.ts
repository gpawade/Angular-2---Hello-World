import {Component, OnInit} from "@angular/core";

import { Router } from '@angular/router-deprecated';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";


@Component({
    selector:"app-dashboard",
    
    templateUrl: "app/dashboard.component.html"
})

export class DashboardComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private router: Router
    ){};
    
    heroes: Hero[];
    
    ngOnInit(){
        this.heroService.getHeroes().then(heroes=>{
            this.heroes = heroes.slice(1,5);
        });
    }
    
    gotoDetail(hero:Hero){
        let link = ['HeroDetail', {id:hero.id}];
        this.router.navigate(link);
    }
};