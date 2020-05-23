import { Component, OnInit } from '@angular/core';
import { AnnonceurService } from '../annonceur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Annonce } from '../Annonce';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  annonces :Annonce [];
  constructor(private loginservice: AuthenticationService,private annonceurService: AnnonceurService,
    private router: Router,private _activatedRoute:ActivatedRoute,private annonceService: AnnonceService) {

      let user = sessionStorage.getItem("username");
    this.loginservice.user(user).subscribe(
      error => console.log(error)
     
    );
     }

  ngOnInit(): void {
    this.listAnnonce();

  }

  listAnnonce() {

    const keyword = this._activatedRoute.snapshot.paramMap.get('keyword');
   
   this.annonceurService.searchAnnonce(keyword,JSON.parse(sessionStorage.getItem("ss"))).subscribe(
     data => {
       this.annonces = data,error => console.log(error)
       //console.log(data);
     }

   )

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

}
