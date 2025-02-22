import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
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

  constructor(){
    if(Math.random()*1 > 0.5){
      this.status = "Active"; 
    } else {
      this.status = "Inactive"; 
    }
  }

  getColor(){
    if(this.status === "Inactive"){
      return "blue";
    }else{
      return "red"
    }
  }
}


