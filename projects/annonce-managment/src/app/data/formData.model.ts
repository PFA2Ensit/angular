import {Deserializable} from "../deserializable.model";

export class FormData {
    
    description : string ='';
    image_url :string='';
    capacite : number=0;
    nomEcole: string = '';
    prix: number=0;
    type: string='';
    prop:string='';
    annonceur : Annonceur;

    

    clear() {
    
    this.prix=0;
    this.nomEcole= '';
    this.image_url ='';
    this.type='';
    this.capacite=0;
    this.description ='';
    this.prop ='';
    }
}

export class Annonceur {
    id :number
    email:string;
    phone:string;
    username :string;
    password : string;

}

export class Annonce {
    prix: number=0;
    nomEcole: string = '';
    image_url :string='';
    type: string='';
    capacite : number=0;
    description : string ='';
    prop:string='';
    annonceur : Annonceur;

    
}
