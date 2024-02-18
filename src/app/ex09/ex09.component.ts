import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEE_LIST } from '../employee-list';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './ex09.component.html',
})
export class Ex09Component {
  private employees: Employee[] = [];
  employeesWithOrderCriteria!: Employee[];

  constructor() {}

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
    this.employeesWithOrderCriteria = this.employees;
    console.log(EMPLOYEE_LIST);
  }


  sortSalary() {
    this.employeesWithOrderCriteria = this.employees.sort(
      (a, b) => b.salary - a.salary
    );
  }

  sortName() {
    this.employeesWithOrderCriteria = this.employees.sort((a, b) => 
      a.name > b.name? 1:a.name < b.name ? -1:0
    );
  }

  sortPosition() {

      this.employeesWithOrderCriteria = this.employees.sort((a, b) => 
      a.position > b.position? 1:a.position < b.position ? -1:0);
  }
}
