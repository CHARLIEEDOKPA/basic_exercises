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

  sort(key:keyof Employee){
    this.employeesWithOrderCriteria = this.employees.sort((a,b) => {
     let aValue = a[key]
     let bValue = b[key]
     
      if(typeof aValue === "number" && typeof bValue === "number" ) {
        return bValue - aValue

      } else {
        let aString =  String(aValue)
        let bString = String(bValue)

        return aString.localeCompare(bString)
      }

    })
  }

}
