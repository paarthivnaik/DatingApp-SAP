import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Users } from '../_models/users';
import { UserService } from '../_services/user.service';
import { AlertyfyjsService } from '../_services/alertyfyjs.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MemberDetailResolver implements Resolve<Users>{
    constructor(private userService: UserService,
        private alertify: AlertyfyjsService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Users> {
return this.userService.getUser(route.params['id']).pipe(
    catchError(error => {
        this.alertify.error('Problem Retriving Data');
        this.router.navigate(['/members']);
        return of(null);
    })
);
    }
}