import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent, 
    ContactComponent
  ]
})
export class SharedModule { }
