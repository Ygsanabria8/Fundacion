import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit,DoCheck {

  responsive:boolean =true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  ngDoCheck(){
    if(screen.width < 600){
      this.responsive = true;
    }else{
      this.responsive = false
    }
  }

  goAbout(){
    this.router.navigateByUrl("/about")
  }
}
