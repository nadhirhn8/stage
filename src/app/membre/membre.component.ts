import { Component } from '@angular/core';
import { Employe } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent {
  temployees!: Employe[]
  constructor(private empservice: EmployeeService) { }
  ngOnInit() {
    console.log(this.temployees)
    this.empservice.getEmployees().subscribe(data => {
      this.temployees = data;
    })
    console.log(this.temployees)
  }
}