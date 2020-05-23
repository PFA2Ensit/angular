import { Annonceur } from './annonceur';

export class Annonce{
    id: number;
    genre : string ='';
    prix: number=0;
    nomEcole: string = '';
    image_url :string='';
    type: string='';
    capacite : number=0;
    description : string ='';
    prop:string='';
    annonceur : Annonceur;

    
}

