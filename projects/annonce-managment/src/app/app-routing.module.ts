import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ResultComponent } from './result/result.component';
import { PropertiesComponent } from './properties/properties.component'
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'annonces', component: ListeComponent },
{ path: 'update/:id', component: UpdateAnnonceComponent },
{ path: 'add', component: AnnonceComponent },
{ path: 'result',  component: ResultComponent},
{ path: 'properties',  component: PropertiesComponent},
{ path: 'profile', component: ProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
