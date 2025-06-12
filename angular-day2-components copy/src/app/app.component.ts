import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-day2-components';
}
