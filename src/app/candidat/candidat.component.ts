import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent {
  constructor(private formbuilder:FormBuilder ,  router:Router) { }
  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:[''],
      password:[''],
    })
  }
  
public loginform!:FormGroup;

}