/*import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AnnonceService } from '../annonce.service';
//import { Annonce } from '../Annonce';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService }     from '../data/form-data.service';
import { Annonceur ,Annonce}            from '../data/formData.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})

export class AnnonceComponent implements OnInit {
  title = 'Fill with contact info';
  personal: Annonceur ;
  form: any;
  annonce: Annonce = new Annonce();

  submitted = false;
  constructor(private annonceService: AnnonceService,
    private router: Router, private formDataService: FormDataService) { 
      

    }

  ngOnInit(): void {
    this.personal = this.formDataService.getPersonal();
    
        console.log('form loaded!');
  }
  
  saveP(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setPersonal(this.personal);
    
    
    return true;
}

goToNext(form: any) {
    if (this.saveP(form)) {
        // Navigate to the work page
        this.router.navigate(['/properties']);
    }
}


  newAnnonce(): void {
    this.submitted = false;
    
    this.annonce = new Annonce();
  }

  save() {
    this.annonceService.createAnnonce(this.annonce)
      .subscribe(data => console.log(data), error => console.log(error));
    this.annonce = new Annonce();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}*/

import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Annonce }             from '../data/formData.model';
import { FormDataService }     from '../data/form-data.service';
@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  title = 'Fill with local properties';
  property: Annonce;
  form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.property = this.formDataService.getProperties();
        console.log('Address feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setProperties(this.property);
        return true;
    }

    

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    }

}

