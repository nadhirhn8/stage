import { Component } from '@angular/core';
import { Employe } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formemployee',
  templateUrl: './formemployee.component.html',
  styleUrls: ['./formemployee.component.css']
})
export class FormemployeeComponent {
  emp: Employe = new Employe()
  constructor(private empService: EmployeeService , private router:Router) { }
  save() {
    this.empService.createEmployee(this.emp).subscribe(
      (data) => { 
        console.log(data) 
        this.router.navigate(["liste"])
      },
      (error) => console.error()
    )
    
  }
}