import { Component, OnInit, Input } from '@angular/core';
//import { Annonce } from '../Annonce';
import { AnnonceService } from "../annonce.service";
import {ActivatedRoute, Router } from '@angular/router';
import { Annonce }                   from '../data/formData.model';
import { FormDataService }        from '../data/form-data.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
title="Update Announce"
decription:string;
  id: number;
  annonce: Annonce;

  constructor(private loginservice: AuthenticationService,private route: ActivatedRoute,private router: Router,
    private annoceService: AnnonceService,private formDataService: FormDataService) { 

      let user = sessionStorage.getItem("username");
      this.loginservice.user(user).subscribe(
        error => console.log(error)
       
      );
    }

  ngOnInit() {
    this.annonce = new Annonce();

    this.id = this.route.snapshot.params['id'];
    this.decription = this.route.snapshot.params['desc'];

    
    this.annoceService.getAnnonce(this.id)
      .subscribe(data => {
        console.log(data)
        this.annonce = data;
      }, error => console.log(error));

  }

  updateAnnonce() {
    
    this.annoceService.updateAnnonce(this.id, this.annonce)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.annonce = new Annonce();
    this.gotoList();
  }

  onSubmit() {
    this.updateAnnonce();  
    alert("form submitted")  ;
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

}
