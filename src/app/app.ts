import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { UsersWithSignals } from './users-with-signals/users-with-signals';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks'
import { ContactUs } from './contact-us/contact-us';
import { NewUser } from './user/new-user/new-user';
import { UserObj } from './user/user.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewUser, Header, User, Tasks, UsersWithSignals, ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = USERS;
  protected readonly title = signal('lesson-3');
  selectedUser?: any;

  contact: boolean = false;

  addUser: boolean = false;

  onUserSelected(idUserClicked: string) {
    const newUser = this.users.find((user) => user.id == idUserClicked);
    if (newUser)
      this.selectedUser = newUser
  }

  ContactUs() {
    this.contact = true;
  }

  AddUser() {
    this.addUser = true;
  }

  Send() {
    this.contact = false;
  }

  onAddUser(formValue: any) {
    const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    const fullName = `${formValue.name.FirstName} ${formValue.name.LastName}`.trim();
    const newUser: UserObj = {
    id: id,
    name: fullName,
    avatar: 'unknown-user.png'
    };

    this.users.push(newUser)
    this.addUser = false;
  }

  Cancel() {
    this.contact = false;
    this.addUser = false
  }
}
