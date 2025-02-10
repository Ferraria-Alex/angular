import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ex01', component: ParentComponentComponent },
    { path: 'ex02', component: ListFriendsComponent },
];
