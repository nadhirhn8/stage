import { Component } from '@angular/core';
import { Reunion } from '../employee';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-historeunion',
  templateUrl: './historeunion.component.html',
  styleUrls: ['./historeunion.component.css']
})
export class HistoreunionComponent {
  treunion!: Reunion[]
  constructor(private reuservice: ReunionService) { }
  ngOnInit() {
    console.log(this.treunion)
    this.reuservice.getReunions().subscribe(data => {
      this.treunion = data;
    })
    console.log(this.treunion)
  }
}
