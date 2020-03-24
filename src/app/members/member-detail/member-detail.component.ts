import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/_models/users';
import { UserService } from 'src/app/_services/user.service';
import { AlertyfyjsService } from 'src/app/_services/alertyfyjs.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: Users;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService, private alertify: AlertyfyjsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }
  getImages() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: Users) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
}
