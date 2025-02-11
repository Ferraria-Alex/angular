import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent,FormsModule,NgIf,NgFor],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {

  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];

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
