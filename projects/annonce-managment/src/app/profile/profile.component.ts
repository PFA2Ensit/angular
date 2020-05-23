import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
//import { Annonceur } from '../annonceur';
import { NgbModal ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AnnonceService } from '../annonce.service';
import { AnnonceurService } from '../annonceur.service';
import { Annonce ,Annonceur} from '../data/formData.model';
import { ActivatedRoute,Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  title = "User Profile";
  closeResult: string;
  annonces :Annonce [];
  annonceur: Annonceur;
  


  user : Annonceur;
  constructor(private annonceurService: AnnonceurService,private loginservice: AuthenticationService ,private modalService: NgbModal,private annonceService: AnnonceService,private route: ActivatedRoute,private router:Router)
   { 
    let user = sessionStorage.getItem("username");
    this.loginservice.userDetails(user).subscribe(
      data =>  sessionStorage.setItem("id",""+data) , error => console.log(error)
     
    );
  }

  ngOnInit(): void {
    this.userProfile();

    /*$(document).ready(function(){
      $('.edit_btn').click(function(){
      console.log('hello');
      var tr = $(this).closest('tr');
      var data = tr.children("td").map(function(){
      return $(this).text();
      }).get();
     
      console.log(data);
      $('#email').val(data[0]);
      $('#phone').val(data[1]);
      
      });
      });*/

      this.annonceur = new Annonceur();

      let id: number = +sessionStorage.getItem('id');
      
      this.annonceurService.getAnnonceur(id)
        .subscribe(data => {
          console.log(data)
          this.annonceur = data;
        }, error => console.log(error));
  }

  userProfile(){
    let user = sessionStorage.getItem("username");
    this.loginservice.getUser(user).subscribe(
      data => this.user = data ,
      error => console.log(error)
     
    );

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  updateAnnonceur() {
    let id: number = +sessionStorage.getItem('id');

    this.annonceurService.updateAnnonceur(id, this.annonceur)
      .subscribe(
        data => console.log(data), 
        error => console.log(error));
    //this.annonceur = new Annonceur();
    this.gotoList();
  }

  onSubmit() {
    this.updateAnnonceur();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }


  

}
