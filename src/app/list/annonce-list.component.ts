import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../annonce';
@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[];
  ecoleNom: string;
  type: string;
  capacity: number;
  searchMode: boolean;
  constructor(private _annonceService: AnnonceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listAnnonce();
    })
    
  }
  listAnnonce() {
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('nom');

    if (this.searchMode) {
      this.handleListAnnonce();
    } else {
      this.handleSearch();
    }

  }

  handleListAnnonce() {
    const hasName: boolean = this._activatedRoute.snapshot.paramMap.has('nom');

    if (hasName) {
      this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('nom');
    }

    this._annonceService.getAnnonceList(this.ecoleNom).subscribe(
      data => this.annonces = data
    )

  }
  handleSearch() {
    const hasName: boolean = this._activatedRoute.snapshot.paramMap.has('name');
    const hasType: boolean = this._activatedRoute.snapshot.paramMap.has('type');
    const hasCapacity: boolean = this._activatedRoute.snapshot.paramMap.has('capacity');

    if (hasName && hasType && hasCapacity) {
      this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
      this.type = this._activatedRoute.snapshot.paramMap.get('type');
      this.capacity = +this._activatedRoute.snapshot.paramMap.get('capacity');


    }

    this._annonceService.search(this.ecoleNom, this.type, this.capacity).subscribe(
      data => this.annonces = data
    )

  }

  

}
