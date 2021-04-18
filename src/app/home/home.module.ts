import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { AcademicComponent } from './components/academic/academic.component';



@NgModule({
  declarations: [HomeComponent, LandingComponent, AcademicComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
