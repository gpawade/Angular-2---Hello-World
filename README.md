# Angular 2 - Basic


### Component Defination

    @Component({
        selector : "my-app",
        
        template : '<h2>Angular 2</h2>'
        
        styles:[`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
        `],
        
        directives : [ MyCustomDirective ],     // referencce other commponent     
    })

**Note**- styles will only apply to component where define and won't "leak" to the outer HTM.
    

### Template Binding

    /* Use for oneway binding */
    <lable>{{name}}</label>
    
    /* Two way binding */
    <input [(ngModel)]="name" placeholder="user name">
    
    /* listing binding */
    <li *ngFor="let item of cartItems">
    
    </li>
    
**Note** - The (*) prefix to ngFor indicates that the `<li>` element and its children constitute a master template.

    /* click event binding */
    <li (click)="onselect(item)"></li>
