import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { MessagesComponent } from '../messages/messages.component';
import { ListsComponent } from '../lists/lists.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'lists', component: ListsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
