import { Component } from '@angular/core';
import { Reunion } from '../employee';
import { Router } from '@angular/router';
import { ReunionService } from '../reunion.service';
@Component({
  selector: 'app-formreunion',
  templateUrl: './formreunion.component.html',
  styleUrls: ['./formreunion.component.css']
})
export class FormreunionComponent {
  reu: Reunion = new Reunion()
  constructor(private reuService: ReunionService , private router:Router) { }
  save1() {
    this.reuService.createReunion(this.reu).subscribe(
      (data) => { 
        console.log(data) 
        this.router.navigate(["lister"])
      },
      (error) => console.error()
    )
    
  }
}