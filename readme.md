1. angular project creation:-

   i.npm i -global @angular/cli@latest
   version : ng -version
   ii. project name  :- ng new angular-day1
   iii.run:- npm start or ng serve(it will complie angular project and generate bundle files for js and css files and will open live development server)


**components**:-
   The fundamental building block for creating applications in Angular.
   Each component represents a part of a larger web page.
   for a better structure and understanding it is good.

Defining a component:-
1. we will use @component decorator.
2. HTML template that controls what renders into the DOM
3. CSS Selector that defines how the component is used in HTML.
4. A TypeScript class with behaviors, such as handling user input or making requests to a server.


What is Data Binding?
it is concept which allows communcation between the compnent and the temple(html view)
examples with types:
1.interpolation {{}}:- component -> template (used to display data from the component in the html)
  <p>Hello, {{ userName }}</p>
  userName = 'Ramya';
2.Property Binding [property]:-
  component-> dom property
  used to bind values to html element properties

  <img [src]="profilePicUrl">
  profilePicUrl = 'https://example.com/image.jpg';
3.Event Binding (event) :-
 Template -> Component
 used to respond to user actions like clicks.

   <button (click)="greetUser()">Click Me</button>
   greetUser() {
  alert('Hello Ramya!');
}

4. Two-way Binding [(ngModel)] :-
Component <-> Template
Requires FormsModule to be imported in app.module.ts
<input [(ngModel)]="userName">
<p>Hello, {{ userName }}</p>
userName = '';



  
