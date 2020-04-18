import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/_models/users';
import { AlertyfyjsService } from 'src/app/_services/alertyfyjs.service';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/AuthService/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm', { static: true }) editForm: NgForm;
  user: Users;
  photoUrl: string;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertyfyjsService,
    private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile Updated Successfully!');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });

  }
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}