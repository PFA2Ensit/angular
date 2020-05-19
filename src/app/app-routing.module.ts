import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { UniversitiesComponent } from './universities/universities.component';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AnnonceListComponent } from './list/annonce-list.component';
import { AnnonceComponent } from 'projects/annonce-managment/src/app/annonce/annonce.component';
import { ResultComponent } from 'projects/annonce-managment/src/app/result/result.component';
import { ListeComponent } from 'projects/annonce-managment/src/app/liste/liste.component';
import { ProfileComponent } from 'projects/annonce-managment/src/app/profile/profile.component';

const routes: Routes = [
{ path: 'home', component: CarouselComponent},
{ path: 'about', component: ProposComponentComponent },
{ path: 'new', component: NewComponentComponent},
{ path: 'login', component: ContactComponentComponent },
{ path: 'ecole/:nom', component: AnnonceListComponent },
{ path: 'search/:name/:type/:capacity', component: AnnonceListComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'search/:name/:type', component: AnnonceListComponent },
{ path: 'search/:type', component: AnnonceListComponent },
{ path: 'add', component: AnnonceComponent },
{path: 'result',  component: ResultComponent},
{ path: 'search', component: AnnonceListComponent },
{ path: 'list', component: ListeComponent },
{ path: 'profile', component: ProfileComponent }








];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
