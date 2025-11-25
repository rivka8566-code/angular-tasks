import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { UsersWithSignals } from './users-with-signals/users-with-signals';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks'
import { ContactUs } from './contact-us/contact-us';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks, UsersWithSignals, ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = USERS;
  protected readonly title = signal('lesson-3');
  selectedUser?: any;

  contact:boolean = false;

  onUserSelected(idUserClicked: string){
    const newUser =  this.users.find((user)=>user.id == idUserClicked);
    if(newUser)
      this.selectedUser = newUser
  }

  ContactUs(){
    this.contact = true;
  }

  Send(){
    this.contact = false;
  }

  Cancel(){
    this.contact = false;
  }
}
