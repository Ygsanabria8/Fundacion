import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';



@NgModule({
  declarations: [
    AboutComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
