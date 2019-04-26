import { Component } from '@angular/core';
import { Employee, EmployeeLoaderService } from './employee-loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-to-discuss';
  employeeData: Employee[] = [];

  constructor(svc: EmployeeLoaderService) {
    svc.loadEmployees()
      .subscribe(employees => this.employeeData = employees);
  }
}
