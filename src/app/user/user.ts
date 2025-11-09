import { Component, Input, Output,EventEmitter} from '@angular/core';
import { USERS } from '../fake_users';
import { UserObj } from './user.model';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!:UserObj
  @Input({required: true}) isSelected!: boolean
  @Output() userClicked = new EventEmitter<string>()



  get userImgPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserClicked(){
    this.userClicked.emit(this.user.id)
  }
  
}
