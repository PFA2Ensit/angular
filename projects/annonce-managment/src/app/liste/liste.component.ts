import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AnnonceService } from "../annonce.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceurService } from "../annonceur.service";
import { Annonce } from '../data/formData.model';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  annonces :Annonce [];
  id: number;
  constructor(private annonceService: AnnonceService,private annonceurService: AnnonceurService,
    private router: Router,private _activatedRoute:ActivatedRoute) {
     }

  ngOnInit(): void {

    this.reloadData();
    

  }

  reloadData() {
   this.annonceurService.getAnnonceList().subscribe(
     data => this.annonces = data
    
   )
  }

  deleteAnnonce(id: number) {
    this.annonceService.deleteAnnonce(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  annonceDetails(id: number){
    this.router.navigate(['details', id]);
  }

 }