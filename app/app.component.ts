import {Component} from '@angular/core';

class Hero {
    id : number;          
    name : string;
}


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <h3>{{hero.name}} details</h3>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
    
})

export class AppComponent {
    title = 'Tour of heroes';
    hero: Hero = {
        id: 1,
        name : 'windstrom'
    };
 }
