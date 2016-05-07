# Angular 2 - Basic


### Component Defination

    @Component({
        selector : "my-app",
        
        template : '<h2>Angular 2</h2>'    
    })
    

### Template Binding

    /* Use for oneway binding */
    <lable>{{name}}</label>
    
    /* Two way binding */
    <input [(ngModel)]="name" placeholder="user name">