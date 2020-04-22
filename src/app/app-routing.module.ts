import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {App1SharedModule} 
       from "../../projects/annonce-managment/src/app/app.module";
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [{path: 'app1', 
loadChildren: '../../projects/annonce-managment/src/app/app.module#App1SharedModule'},
{ path: 'login', component: ContactComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    App1SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
