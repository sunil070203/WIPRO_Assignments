import { Component } from '@angular/core';

import { CalculatorComponent } from './calculator/calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
 
@Component({

  selector: 'app-root',

  standalone: true,

  imports: [CalculatorComponent,NavbarComponent],

  template: `<app-calculator></app-calculator>`,


})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

 