import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../core/models/employee.model';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees.push(new Employee(11, 'Jelena', 'Mijuskovic', 'jelena@gmail.com'));

    console.log(this.employees);
  }

}
