import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaximeComponent } from './maxime/maxime.component';
import { RouterModule } from '@angular/router';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { AmauryComponent } from './amaury/amaury.component';
import { UsmanComponent } from './usman/usman.component';

@NgModule({
  declarations: [
    AppComponent,
    MaximeComponent,
    NavigatieComponent,
    AmauryComponent,
    UsmanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
