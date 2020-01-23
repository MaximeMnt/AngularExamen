import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaximeComponent } from './maxime/maxime.component';
import { RouterModule } from '@angular/router';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { AmauryComponent } from './amaury/amaury.component';
import { UsmanComponent } from './usman/usman.component';
import { AngularDeel3Component } from './amaury/angular-deel3/angular-deel3.component';
import { Angulardeel4Component } from './amaury/angulardeel4/angulardeel4.component';
import { PanelModule } from 'primeng/panel';
import { Maximedeel5Component } from './maxime/maximedeel5/maximedeel5.component';
import { Angularoef2Component } from './usman/angularoef2/angularoef2.component';
import { Usmandeel5Component } from './usman/usmandeel5/usmandeel5.component';

@NgModule({
  declarations: [
    AppComponent,
    MaximeComponent,
    NavigatieComponent,
    AmauryComponent,
    UsmanComponent,
    AngularDeel3Component,
    Angulardeel4Component,
    Maximedeel5Component,
    Angularoef2Component,
    Usmandeel5Component
  ],
  imports: [
    PanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    RouterModule.forRoot([
      { path: "Maxime", component: MaximeComponent },
      { path: "Amaury", component: AmauryComponent },
      { path: "Usman", component: UsmanComponent },
      { path: "", redirectTo: "Maxime", pathMatch: "full" }
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
