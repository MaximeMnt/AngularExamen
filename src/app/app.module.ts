import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaximeComponent } from './maxime/maxime.component';
import { RouterModule } from '@angular/router';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { AmauryComponent } from './amaury/amaury.component';
import { UsmanComponent } from './usman/usman.component';
import { AngularDeel3Component } from './amaury/angular-deel3/angular-deel3.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { Angulardeel4Component } from './amaury/angulardeel4/angulardeel4.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    MaximeComponent,
    NavigatieComponent,
    AmauryComponent,
    UsmanComponent,
    AngularDeel3Component,
    Angulardeel4Component
  ],
  imports: [
    PanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "Maxime",component:MaximeComponent},
      {path: "Amaury", component: AmauryComponent},
      {path: "", redirectTo: "Maxime", pathMatch:"full"},
      {path: "Usman", component: UsmanComponent},
    ], {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
