import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/AuthService/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp-SPA';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private authServiice: AuthService) { }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authServiice.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
