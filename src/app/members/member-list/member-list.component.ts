import { Component, OnInit } from '@angular/core';
import { Users } from '../../_models/users';
import { AlertyfyjsService } from '../../_services/alertyfyjs.service';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: Users[];
  constructor(private userService: UserService, private alertyfy: AlertyfyjsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(data =>{
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: Users[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.alertyfy.error(error);
  //   });
  // }
}
