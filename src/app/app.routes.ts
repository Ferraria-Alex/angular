import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { Tp2Component } from './tp2/tp2.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ex01', component: ParentComponentComponent },
    { path: 'ex02', component: ListFriendsComponent },
    { path: 'ex03', component: Tp2Component },
    { path: 'ex07', component: BlogControlCenterComponent },
];
