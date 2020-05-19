import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from './Annonce';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';

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

  getAnnonceList(): Observable<Annonce[]> {
     let id: number = +sessionStorage.getItem('id');
     console.log(id);
    return this.http.get<getResponse>(`${this.baseUrl}/${id}/annonce`).pipe(
    map(response => response._embedded.annonces)
    );
    
    
  }


  

  
  
}

interface getResponse{
  _embedded : {
    annonces : Annonce[];
  }
    
}
