import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
import { FormemployeeComponent } from './formemployee/formemployee.component';
import { HeaderComponent } from './header/header.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { MembreComponent } from './membre/membre.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormreunionComponent } from './formreunion/formreunion.component';
import { ListereunionComponent } from './listereunion/listereunion.component';
import { HistoreunionComponent } from './historeunion/historeunion.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { RecruempComponent } from './recruemp/recruemp.component';
const routes: Routes = [
  { path: "entrer", component: CandidatComponent },
  { path: "", component: CandidatComponent },
  { path: "header", component: HeaderComponent },
  { path: "liste", component: ListemployeeComponent },
  { path: "add", component: FormemployeeComponent },
  { path: "membre", component: MembreComponent},
  { path: "acc",  component: AccueilComponent},
  { path: "addr",  component: FormreunionComponent},
  { path : "lister", component: ListereunionComponent},
  { path : "his", component: HistoreunionComponent},
  { path : "recru", component: RecrutementComponent},
  { path : "recemp", component: RecruempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
