import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  lastName: string = 'Doe';
  firstName: string = 'John';
  age: number = 25;
  quote: string = 'Accepte la frustration';
  img: string = 'https://randomuser.me/api/portraits/lego/2.jpg';
  visible: boolean = true;

  hidden(): void {
    // toggle: dans un sens et dans l'autre au clic
    this.visible = !this.visible;
  }
}
