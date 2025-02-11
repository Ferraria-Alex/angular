import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Tp2Component } from './tp2/tp2.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ex01', component: ParentComponentComponent },
    { path: 'ex03', component: Tp2Component },
];
