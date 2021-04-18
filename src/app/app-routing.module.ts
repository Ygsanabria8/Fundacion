import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/components/about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
      path:'',component:LayoutComponent,
      children:[
        {
          path:'',
          redirectTo:'/home',
          pathMatch:'full'
        },
        {
          path:'home', loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
        },
        {
          path:'about',loadChildren:()=> import('./about/about.module').then(m => m.AboutModule)
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
