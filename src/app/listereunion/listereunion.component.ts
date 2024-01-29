import { Component } from '@angular/core';
import { ReunionService } from '../reunion.service';
import { Reunion } from '../employee';
@Component({
  selector: 'app-listereunion',
  templateUrl: './listereunion.component.html',
  styleUrls: ['./listereunion.component.css']
})
export class ListereunionComponent {
  reunion1 = {
    numr: "1",
    nomr: "2",
    bureaur: "bureau",
    dater:""
  }
  reunionList: Reunion[] = []
  constructor(private x: ReunionService) { }
  ngOnInit(): void {
    this.x.getReunions().subscribe(data => {
      this.reunionList = data;
    });
  }
  delete(numr:string){
    console.log(numr)
    let response=confirm("vouler vous supprimer ce reunion !")
    if(response){
    this.x.deleteReunion(numr).subscribe(
      (data)=>{
        this.reunionList=this.reunionList.filter(elt => elt.numr != numr)
      },
      (error)=>{
        console.log(error)
      }
    )
}
}
}