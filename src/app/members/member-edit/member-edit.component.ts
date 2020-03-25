import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/_models/users';
import { AlertyfyjsService } from 'src/app/_services/alertyfyjs.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm', { static: true }) editForm: NgForm;
  user: Users;
  @HostListener('windows:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if(this.editForm.dirty) {
     $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertyfyjsService, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
  updateUser() {
    console.log(this.user);
    this.alertify.success('Profile Updated Successfully!');
    this.editForm.reset(this.user);
  }
}
