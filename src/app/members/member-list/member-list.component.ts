import { Component, OnInit } from '@angular/core';
import { Users } from '../../_models/users';
import { AlertyfyjsService } from '../../_services/alertyfyjs.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: Users[];
  constructor(private userService: UserService, private alertyfy: AlertyfyjsService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    }, error => {
      this.alertyfy.error(error);
    });
  }
}
