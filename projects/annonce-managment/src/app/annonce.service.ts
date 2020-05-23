import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from './data/formData.model';
import { map } from 'rxjs/operators';

//let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl = 'http://localhost:8080/annonces';
  constructor(private http: HttpClient) { }

  createAnnonce(annonceur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, annonceur);
  }

  
  getAnnonce(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getById(desc: string,annonceur: Object): Observable<Annonce>{
    
    const searchUrl = `http://localhost:8080/annonces/search/getAdd?desc=${desc}`;
    return this.http.get<Annonce>(searchUrl,annonceur).pipe(
      map(response => response)
      );
     
  }

  

  updateAnnonce(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnnonceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  

  

}


interface getResponse{
  _embedded : {
    annonces : Annonce[];
  }}
