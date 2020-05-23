import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Annonce } from './Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceurService {
  //id : number;

  private baseUrl = 'http://localhost:8080/dAOUsers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient ,private loginservice: AuthenticationService) { 
    let user = sessionStorage.getItem("username");
  this.loginservice.userDetails(user).subscribe(
    data =>  sessionStorage.setItem("id",""+data) , error => console.log(error)
   
  );
  }

  getAnnonceur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  updateAnnonceur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getAnnonceList(): Observable<Annonce[]> {
     let id: number = +sessionStorage.getItem('id');
     console.log(id);
    return this.http.get<getResponse>(`${this.baseUrl}/${id}/annonce`).pipe(
    map(response => response._embedded.annonces)
    );
    
    
  }

  searchAnnonce(keyword: string,annonceur: Object): Observable<Annonce[]>{
    let id: number = +sessionStorage.getItem('id');
    const searchUrl = `http://localhost:8080/annonces/search/searchbykeyword?name=${keyword}`;
    return this.http.get<getResponse>(searchUrl,annonceur).pipe(
      map(response => response._embedded.annonces)
      );
     ;
  }


  

  
  
}

interface getResponse{
  _embedded : {
    annonces : Annonce[];
  }
    
}


