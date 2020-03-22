import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/_models/users';
import { UserService } from 'src/app/_services/user.service';
import { AlertyfyjsService } from 'src/app/_services/alertyfyjs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: Users;
  constructor(private userService: UserService, private alertify: AlertyfyjsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: Users) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }
}
