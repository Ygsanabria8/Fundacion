import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { AcademicComponent } from './components/academic/academic.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent, 
    LandingComponent, 
    AcademicComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
