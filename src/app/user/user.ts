import { Component, Input, Output,EventEmitter} from '@angular/core';
import { USERS } from '../fake_users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() name: string = '';
  @Input() avatar: string = '';
  @Input({required: true}) id!: string

  @Output() userClicked = new EventEmitter<string>()



  get userImgPath() {
    return 'assets/users/' + this.avatar;
  }

  onUserClicked(){
    this.userClicked.emit(this.id)
  }
  
}
