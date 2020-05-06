import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce } from '../Annonce';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  annonces: Annonce[];

  constructor(private _annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this._annonceService.recentAdd().subscribe(
      data => this.annonces = data
     
    )
   }
}
