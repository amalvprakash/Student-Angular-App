import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"list",
    component:StudentListComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  }
] 
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
