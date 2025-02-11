import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  text: string = "Aucun Ami...";
  input: string = "";

  onUpdateInput($event:any){
    this.input = $event.target.value;
  }

  addFriend(data:string){
    this.text = `Friend ${data} has been added! Hurray!!!`;
  }

  //isDisabled: boolean = false;

  //constructor() {
  //  setTimeout(() =>{
  //    this.isDisabled = true;
  //  }, 3000);
  //}
}
