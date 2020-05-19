import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Annonceur } from '../annonceur';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = "User Profile";
  user : Annonceur
  constructor(private loginservice: AuthenticationService ) { }

  ngOnInit(): void {
    this.userProfile();
  }

  userProfile(){
    let user = sessionStorage.getItem("username");
    this.loginservice.getUser(user).subscribe(
      data => this.user = data ,
      error => console.log(error)
     
    );

  }

}
