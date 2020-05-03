import { Component, OnInit } from '@angular/core';
import { Users } from '../../_models/users';
import { AlertyfyjsService } from '../../_services/alertyfyjs.service';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: Users[];
  pagination: Pagination;
  constructor(private userService: UserService, private alertyfy: AlertyfyjsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage).
    subscribe((res: PaginatedResult<Users[]>) => {
      this.users = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertyfy.error(error);
    });
  }
}
