import { Component } from '@angular/core';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';

@Component({
  selector: 'app-component-2',
  imports: [Comp1Component, Comp2Component],
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.css'
})
export class Component2Component {

}
