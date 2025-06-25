import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
@Input() name: string = '';
@Input() title: string = '';
@Input() avatar: string = '';

}
