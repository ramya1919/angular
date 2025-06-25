import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfileCardComponent } from "./profile-card/profile-card.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  team=[
    { name: 'Alice', title: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob', title: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Charlie', title: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Ramya', title: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?img=3' },

  ];
}
