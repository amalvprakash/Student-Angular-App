import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

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
  },
  {
    path:"search",
    component:StudentSearchComponent

  }
  
] 
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    NavbarComponent,
    StudentSearchComponent,
    StudentDeleteComponent
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
