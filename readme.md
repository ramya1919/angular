1. angular project creation:-

   i.npm i -global @angular/cli@latest
   version : ng -version
   ii. project name  :- ng new angular-day1
   iii.run:- npm start or ng serve(it will complie angular project and generate bundle files for js and css files and will open live development server)


**components**:- ng generate component greeting
   The fundamental building block for creating applications in Angular.
   Each component represents a part of a larger web page.
   for a better structure and understanding it is good.
angular is a component based javascript framework for building client side application
a component is a piece of user interface.
every angular application has at leat one component
an angular application is essentially a tree of component
combining all these components together makes an angular UI.

Defining a component:-
1. we will use @component decorator.
2. HTML template that controls what renders into the DOM
3. CSS Selector that defines how the component is used in HTML.
4. A TypeScript class with behaviors, such as handling user input or making requests to a server.

app commponent is the root component for all other components in angular project.

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


Advantages Of Typescript:-
typescript is a superset of javascript
typescript has additional features which do not exist in current version of javascript supported by most browsers.
typescript is strongly typed. but javascript is dynamlically typed.
typescript has some object-oriented features that we do not have in javascript yet.
with typescript we can catch errors at compile time.

View Template (html file):-
the view template of a component is a form of HTML that tells Angular how to render a component.

adding css globally:-

by adding styles in style.css we can apply the styles globally.

adding bootstrap:
npm i --save bootstrap
ex:
"style":{
  "node_modules/bootstrap/dist/bootstrap.min.css",
  "src/styles.css"
}
or we can add that import in styles.css file.

**types of component selectors**:-
 1.html element selector
 ts file:
 @component{
  selector:app-header
 }
 html file :
 <app-header></app-header>
 2.attribute selector
ts file:
 @component{
  selector:[app-header]
 }
 html file :
 <div app-header></div>
 3.class selector
 ts file:
 @component{
  selector: .app-header
 }
 html file :
 <div class="app-header"></div>
 4.id selector
 ts file:
 @component{
  selector: #app-header
 }
 html file :
 <div id="app-header"></div>