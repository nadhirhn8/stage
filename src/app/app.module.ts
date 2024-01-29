import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatComponent } from './candidat/candidat.component';
import { FormemployeeComponent } from './formemployee/formemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { MembreComponent } from './membre/membre.component';
import { FormreunionComponent } from './formreunion/formreunion.component';
import { ListereunionComponent } from './listereunion/listereunion.component';
import { HistoreunionComponent } from './historeunion/historeunion.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { RecruempComponent } from './recruemp/recruemp.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    CandidatComponent,
    FormemployeeComponent,
    ListemployeeComponent,
    MembreComponent,
    FormreunionComponent,
    ListereunionComponent,
    HistoreunionComponent,
    RecrutementComponent,
    RecruempComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
