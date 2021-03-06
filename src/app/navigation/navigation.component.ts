import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/AuthService/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully !');
    }, error => {
      console.log('Fialed to loggin !');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('logged out !');
  }
}
