import { Component ,EventEmitter, Output} from '@angular/core';
import { FormsModule ,NgForm} from '@angular/forms';
import { NewTaskData } from '../task/task.model'

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() addTask = new EventEmitter<NewTaskData>()
  @Output() cancel = new EventEmitter<void>()

  title = "title"
  summary = "summary"
  dueDate = '16/11/25'

  onSubmit(form: NgForm){
    this.addTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    })

    console.log(form);
    console.log(this.title);
    console.log(this.summary);
    console.log(this.dueDate);
  }

  Cancel(){
    this.cancel.emit();
  }
}
