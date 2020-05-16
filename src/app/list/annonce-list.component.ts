import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  chosenMod: string = "";
  constructor(private _annonceService: AnnonceService, private _activatedRoute: ActivatedRoute,private _router:Router) { }

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
      if( this.type == "All" && this.capacity == 1){
        this._annonceService.getAll().subscribe(
          data => this.annonces = data
        )
        }
        else{
      this._annonceService.search(this.ecoleNom, this.type, this.capacity).subscribe(
        data => this.annonces = data,data =>console.log(data) 
      )
      }
    }

    

    else if(hasName && hasType){
      this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
      this.type = this._activatedRoute.snapshot.paramMap.get('type');

      this._annonceService.searchBynomandtype(this.ecoleNom, this.type).subscribe(
        data => this.annonces = data
      )
    }

    else if(hasType){
      
      this.type = this._activatedRoute.snapshot.paramMap.get('type');

      this._annonceService.searchBytype(this.type).subscribe(
        data => this.annonces = data
      )

    }

    else if(hasCapacity && hasType){
      this.capacity = +this._activatedRoute.snapshot.paramMap.get('capacity');
      this.type = this._activatedRoute.snapshot.paramMap.get('type');

      this._annonceService.searchBytypeandcap(this.type, this.capacity).subscribe(
        data => this.annonces = data
      )

    }

    /*else if() {
      this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
      this.type = this._activatedRoute.snapshot.paramMap.get('type');
      this.capacity = +this._activatedRoute.snapshot.paramMap.get('capacity');
     

    }*/

  }
  searchAnnonce(ecole:string,type:string,capacity:String){
    
    console.log('keywords :',type,ecole,capacity);
    if(ecole =="institution" && type=="Type" ){
     this._router.navigateByUrl('/search/'+"Ensit"+'/'+"All"+"/"+1);
    }
    else if(ecole =="institution" ){
     this._router.navigateByUrl('/search/'+type);
 
    }
    else if(capacity == "Capacity" ){
     this._router.navigateByUrl('/search/'+ecole+'/'+type+'/'+1);
 
    }
     else {
       this._router.navigateByUrl('/search/'+ecole+'/'+type+'/'+capacity);
 
     }
   
 
   }
 

   modo(){
    switch(this.chosenMod) {  
       case "asc": { 
        const hasName: boolean = this._activatedRoute.snapshot.paramMap.has('name');
        const hasType: boolean = this._activatedRoute.snapshot.paramMap.has('type');
        const hasCapacity: boolean = this._activatedRoute.snapshot.paramMap.has('capacity');
    
        if (hasName && hasType && hasCapacity) {
          this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
          this.type = this._activatedRoute.snapshot.paramMap.get('type');
          this.capacity = +this._activatedRoute.snapshot.paramMap.get('capacity');
    
    
        }
        this._annonceService.prixAsc(this.ecoleNom, this.type, this.capacity).subscribe(
          data => this.annonces = data
        )
          break;
       }
       case "desc": { 
        const hasName: boolean = this._activatedRoute.snapshot.paramMap.has('name');
        const hasType: boolean = this._activatedRoute.snapshot.paramMap.has('type');
        const hasCapacity: boolean = this._activatedRoute.snapshot.paramMap.has('capacity');
    
        if (hasName && hasType && hasCapacity) {
          this.ecoleNom = this._activatedRoute.snapshot.paramMap.get('name');
          this.type = this._activatedRoute.snapshot.paramMap.get('type');
          this.capacity = +this._activatedRoute.snapshot.paramMap.get('capacity');
    
    
        }
        this._annonceService.prixDesc(this.ecoleNom, this.type, this.capacity).subscribe(
          data => this.annonces = data
        )
          break;
       }
       
    }
  }

}
