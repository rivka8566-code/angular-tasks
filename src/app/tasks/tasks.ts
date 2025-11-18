import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks'
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TaskObj } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask, TaskObj, NewTaskData],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks = fakeTasks
  @Input({required:true}) userId!:string
  @Input({required:true}) name!:string

  showTask = false;

  onShowTask(){
    this.showTask = true;
  }

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onAddTask(newTask: NewTaskData){
    const newTask = {
      id: 't' + (this.tasks.length) + 1,
      
    }
  }
}
