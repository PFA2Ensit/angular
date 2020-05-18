import { Component, ViewChild, HostListener, ElementRef, AfterViewInit  } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import 'jarallax';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
declare var jarallax: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  opened = true;
  sticky: boolean = false;
  loggedIn : boolean = false;
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  //@ViewChild('toolbar', { static: true }) toolbar:  ElementRef;
  barPosition: any;
/*ngAfterViewInit(){
    this.barPosition = this.barElement.nativeElement;
}*/
  ngOnInit() {

    let user = sessionStorage.getItem("username");
    this.loginservice.user(user).subscribe(
      data =>  console.log(data) , error => console.log(error)
     
    );
    
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 65;
      this.opened = true;
    }
    if (this.loginservice.isUserLoggedIn()){
      this.loggedIn=true;
      console.log(this.loggedIn);
    }
  }
  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 65;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const pos = document.getElementById("tool").offsetTop;
        const windowScroll = window.pageYOffset;
       
        if(windowScroll >= pos){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

    logout(){
      return this.loginservice.logOut();
    }

  }