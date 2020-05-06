import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propos-component',
  templateUrl: './propos-component.component.html',
  styleUrls: ['./propos-component.component.css']
})
export class ProposComponentComponent implements OnInit {
  countResult:number = 20;
  constructor(private _annonceService: AnnonceService) { }
  ngOnInit(): void {
    //this._annonceService.getCount().subscribe((data)=>this.countResult =data)
    console.log(this.countResult);

  }

 /* getCountFromService(){
  
    }*/

}
