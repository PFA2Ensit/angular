import { Component, OnInit,Input } from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }        from '../data/form-data.service';
import { AnnonceService } from '../annonce.service';
//import { Annonce } from '../Annonce';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annonceur ,Annonce}            from '../data/formData.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  annonceur : Annonceur;

  title = 'Review and submit';
  @Input() formData: FormData;
  isFormValid: boolean = false;
  personal: Annonceur ;
  annonce : Annonce;
  submitted = false;
  constructor(private router:Router,private sanitizer: DomSanitizer,private annonceService: AnnonceService,private formDataService: FormDataService,private loginservice: AuthenticationService ) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      console.log('Result feature loaded!');
      //JSON.parse(sessionStorage.getItem("user"));

      
  }

  newAnnonce(): void {
    this.submitted = false;
    
    //this.annonce = new Annonce();
  }

  save() {
    console.log(this.formData);
    /*let user = sessionStorage.getItem("username");
    this.loginservice.userDetails(user).subscribe(
      data =>  console.log(data) , error => console.log(error)
     
    );*/
    this.annonceService.createAnnonce(this.formData)
          .subscribe(data => console.log(data), error => console.log(error));

    this.annonce = new Annonce();
  }

  submit() {
      alert('form submitted!');
      this.submitted = true;
      this.save(); 
      //this.formData = this.formDataService.resetFormData();
      this.isFormValid = false;
      this.gotoList();
     
  }
  gotoList() {
    this.router.navigate(['/list']);
  }

public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
