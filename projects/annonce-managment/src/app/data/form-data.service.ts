import { Injectable } from '@angular/core';
import { FormData,Annonceur,Annonce }       from './formData.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { NgForm } from '@angular/forms';
//import { Annonce } from '../Annonce';
//import { Annonceur }            from '../Annonceur';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {
    forms:NgForm ;
    gender =this.forms?.controls['gender'].value;
    proper = this.forms?.controls['extra'].value;
    
    //private annonceur: Annonceur = new Annonceur();
  constructor(private loginservice: AuthenticationService) {
    let user = sessionStorage.getItem("username");
    this.loginservice.user(user).subscribe(
      error => console.log(error)
     
    );
    
    let obj = JSON.parse(sessionStorage.getItem("ss"));
    console.log(obj);
    this.formData.genre = this.gender;
    this.formData.prop=this.proper;


   }
  private formData: FormData = new FormData();

  private isPersonalFormValid: boolean = false;
   
   /* getPersonal(): Annonceur {
        var personal: Annonceur = {
            phone: this.annonceur.phone,
            email: this.annonceur.email
        };
        return personal;
    }

    setPersonal(data: Annonceur) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.annonceur.phone = data.phone;
        this.annonceur.email = data.email;
    }*/

    

   

    getProperties() : Annonce {
        // Return the Properties data
        var annonce: Annonce = {
          //address: this.formData.address,
          prop:this.formData.prop,
          price:this.formData.price ,
          nomEcole:this.formData.nomEcole ,
          image_url:this.formData.image_url ,
          genre:this.formData.genre,
          type:this.formData.type,
          capacite:this.formData.capacite,
          description: this.formData.description,
          annonceur : JSON.parse(sessionStorage.getItem("ss"))
        };
        return annonce;
    }

    setProperties(data: Annonce) {
        // Update the Address data only when the Address Form had been validated successfully
        //this.formData.address = data.address;
        this.formData.prop = data.prop;
        this.formData.price= data.price;
        this.formData.nomEcole = data.nomEcole;
        this.formData.image_url= data.image_url;
        this.formData.genre = data.genre;
        this.formData.type = data.type;
        this.formData.capacite = data.capacite;
        this.formData.description= data.description;
        this.formData.annonceur = data.annonceur;

   
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid ;
                
    }
}
