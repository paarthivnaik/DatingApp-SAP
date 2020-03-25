import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { AlertyfyjsService } from '../_services/alertyfyjs.service';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent>  {
  constructor(private alertify: AlertyfyjsService) { }
  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm('Are you sure ,you want to continue? Any unsaved changes will be lost ?');

    }
    return true;
  }
}
