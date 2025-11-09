import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks'
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks = fakeTasks
  @Input({required:true}) userId!:string
  @Input({required:true}) name!:string

  get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
