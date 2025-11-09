import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks'
//import { UserObj } from './user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = USERS;
  protected readonly title = signal('lesson-3');
  selectedUser?: any;

  onUserSelected(idUserClicked: string){
    const newUser =  this.users.find((user)=>user.id == idUserClicked);
    if(newUser)
      this.selectedUser = newUser
  }
}
