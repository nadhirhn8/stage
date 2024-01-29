import { Component } from '@angular/core';
import { Employe } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {
  employee1 = {
    nom: "hnihina",
    prenom: "mongi",
    email: "mongihnihina@gmail.com",
    poste:"management",
    salaire: "3000"
  }
  employeeList: Employe[] = [];
  constructor(private x: EmployeeService) { }
  ngOnInit(): void {
    this.x.getEmployees().subscribe(data => {
      this.employeeList = data;
    });
  }
  delete(id:string){
    console.log(id)
    let response=confirm("vouler vous supprimer ce compte !")
    if(response){
    this.x.deleteEmployee(id).subscribe(
      (data)=>{
        this.employeeList=this.employeeList.filter(elt => elt.id != id)
      },
      (error)=>{
        console.log(error)
      }
    )
}
}

}