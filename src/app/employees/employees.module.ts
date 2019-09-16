import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }
