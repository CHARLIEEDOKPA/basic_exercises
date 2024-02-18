import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius!: number;
  fahrenheit!: number;
  private pattern = "^[0-9]..*$"


  form:FormGroup = new FormGroup({
    celcius : new FormControl(this.celcius,[
      Validators.pattern(this.pattern)
    ],
    ),
    fahrenheit: new FormControl(this.fahrenheit,[
      Validators.pattern(this.pattern)
    ])
  });

  

  constructor() {
  }

  ngOnInit(): void {

  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius() {
    this.celcius = (this.fahrenheit - 32) * 5 / 9;
  }

  converToFahrenheit() {
    this.fahrenheit = this.celcius * 9 / 5 + 32;
  }
}
