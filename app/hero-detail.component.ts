import {Component, Input} from "@angular/core";

import {Hero} from "./hero";


@Component({
    selector: "hero-detail",
    
    template: `
        <div *ngIf="hero">
            <h3>{{hero.name}} details</h3>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `
})

export class HeroDetailComponent{
    
    @Input()
    hero: Hero;
}