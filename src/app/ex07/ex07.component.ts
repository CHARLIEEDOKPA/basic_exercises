import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ex07.component.html'
})
export class Ex07Component {
  numbers: number[] = [];
  fruits: string[] = [];

  input!:string;

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55].sort((a,b) => a - b);
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"].sort();
  }

  put() {
    this.fruits.push(this.input.toUpperCase())
    this.fruits.sort();
  }

}
