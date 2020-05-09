import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users';
import { AuthService } from '../_services/AuthService/auth.service';
import { UserService } from '../_services/user.service';
import { AlertyfyjsService } from '../_services/alertyfyjs.service';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  users: Users[];
  pagination: Pagination;
  likesParam: string;

  constructor(private authService: AuthService, private userService: UserService,
    private route: ActivatedRoute, private alertify: AlertyfyjsService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.user.result;//['users'].result;data.user.result
      this.pagination = data.user.pagination;//data['users'].pagination;
    });
    this.likesParam = 'Likers';
  }

  loadUsers() {
    this.userService
      .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
      .subscribe((res: PaginatedResult<Users[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }


}
