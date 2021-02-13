import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './security/login/login.component';
import {RegisterComponent} from './security/register/register.component';
import {ProfileComponent} from './security/profile/profile.component';
import {AddNameComponent} from './chat/add-name/add-name.component';
import {RoomlistComponent} from './chat/roomlist/roomlist.component';
import {AddRoomComponent} from './chat/add-room/add-room.component';
import {ChatRoomComponent} from './chat/chat-room/chat-room.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'chat-name',
    component: AddNameComponent
  },
  {
    path: 'roomlist',
    component: RoomlistComponent
  },
  {
    path: 'addroom',
    component: AddRoomComponent
  },
  {
    path: 'chatroom/:roomname',
    component: ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
