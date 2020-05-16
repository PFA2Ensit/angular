import {Deserializable} from "../deserializable.model";

export class FormData {
    
    description : string ='';
    image_url :string='';
    capacite : number=0;
    nomEcole: string = '';
    prix: number=0;
    type: string='';
    prop:string='';
    

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
    email:string;
    phone:string;

}

export class Annonce {
    prix: number=0;
    nomEcole: string = '';
    image_url :string='';
    type: string='';
    capacite : number=0;
    description : string ='';
    prop:string='';

    
}
