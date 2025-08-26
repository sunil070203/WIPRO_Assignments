import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | string = '';
 
  add() { this.result = this.num1 + this.num2; }
  subtract() { this.result = this.num1 - this.num2; }
  multiply() { this.result = this.num1 * this.num2; }
  divide() {
    this.result = this.num2 === 0 ? 'Cannot divide by 0' : this.num1 / this.num2;
  }
}
