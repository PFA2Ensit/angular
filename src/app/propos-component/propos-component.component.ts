import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propos-component',
  templateUrl: './propos-component.component.html',
  styleUrls: ['./propos-component.component.css']
})
export class ProposComponentComponent implements OnInit {
   countResult: number ;
  constructor(private _annonceService: AnnonceService) { 
    this._annonceService.getCount().subscribe((data)=>sessionStorage.setItem("total",""+data))
    

  }
  ngOnInit(): void {
    //this._annonceService.getCount().subscribe((data)=>this.countResult =data)
   this.countResult = +sessionStorage.getItem('total');
    console.log(this.countResult);

  }
  
  
}
