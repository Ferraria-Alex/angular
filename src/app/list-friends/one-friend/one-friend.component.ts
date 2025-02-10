import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})

export class OneFriendComponent {
  firstName: string = "JEFF"; 
  lastName: string = "The land shark";
  status: string = "Active";
  age: number = 22;
  bio: string = "JEFF The land shark";
  interests: string[] = ['Fish', 'Being cute', 'Water fights'];
  reputation: string = "Cute But Will Bite";
  image: string = "/jeff.webp";
}


