import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../annonce.service';
import { ActivatedRoute } from '@angular/router';
import { Annonce} from '../annonce';
@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces :Annonce [];
  ecoleNom : string;
  constructor(private _annonceService: AnnonceService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=> {
     this.listAnnonce();
    })
  }
  listAnnonce(){

    const hasName :boolean = this._activatedRoute.snapshot.paramMap.has('name');

    if(hasName){
      this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
    }

    this._annonceService.getAnnonceList(this.ecoleNom).subscribe(
      data => this.annonces = data 
    )
  }

}
