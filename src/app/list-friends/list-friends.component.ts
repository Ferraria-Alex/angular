import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent,FormsModule,NgIf],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  input: string = "";
  isAdded: boolean = false;

  changeText(){
    if(this.input){
      this.isAdded = true;
    }
  }

  //addFriend(){
  //  this.text = `Friend ${this.input} has been added! Hurray!!!`;
  //}

  //isDisabled: boolean = false;

  //constructor() {
  //  setTimeout(() =>{
  //    this.isDisabled = true;
  //  }, 3000);
  //}
}
