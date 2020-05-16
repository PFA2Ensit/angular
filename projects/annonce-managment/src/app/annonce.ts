import { Annonceur } from './annonceur';

export class Annonce{
    id: number;
    address:string;
    property:string;
    nomEcole : string; 
    prix: number;
    description: string;
    nb_place: number;
    type: string;
    image_url:string;
    date_ajout: Date;
    availabe: boolean;
    genre:string;
    annonceur:Annonceur;
}