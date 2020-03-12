import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/AuthService/auth.service';
import { error } from 'util';
import { AlertyfyjsService } from '../_services/alertyfyjs.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertyfyjsService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
     this.alertify.success('logged in successfully !');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out !');
  }
}
