import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from "rxjs";
import { AnnonceService } from "../annonce.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceurService } from "../annonceur.service";
import { Annonce } from '../Annonce';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,NgForm} from '@angular/forms'
declare var $: any;
//declare var data :any;
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  
  annonces :Annonce [];
  annonce : Annonce;
  
  constructor(private annonceService: AnnonceService,private annonceurService: AnnonceurService,
    private router: Router,private _activatedRoute:ActivatedRoute) {
     }
     

  ngOnInit(): void {

    this.reloadData();

   /* $(document).on('click', '.edit_btn', function(e) { 
      try{
          var $row = $(this).closest("tr");
          var id = $row.find('td:eq(0)').text();
          var schoolName = $row.find('td:eq(2)').text();
          var cap = $row.find('td:eq(3)').text();
          var prix = $row.find('td:eq(4)').text();
          var type= $row.find('td:eq(5)').text();
          var des = $row.find('td:eq(6)').text();


          $('#update_id').val(id);
          $('#university').val(schoolName);
          $('#type').val(type);
          $('#price').val(prix);
          $('#numberOfPersons').val(cap);
          $('#description').val(des);
      }
      catch(err){alert(err);}
      });*/

      
    

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

  updateAnnonce(id: number){
    this.router.navigate(['update', id]);
  }

  

 }