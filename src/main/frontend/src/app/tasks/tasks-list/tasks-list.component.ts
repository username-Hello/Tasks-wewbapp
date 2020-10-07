import {Component, OnInit} from '@angular/core';
import {Task} from '../task.module';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.tasks.push(new Task(1, "Item 1", true, "07/08/20"))
        this.tasks.push(new Task(2, "Item 2", true, "07/08/20"))
        this.tasks.push(new Task(3, "Item 3", true, "07/08/20"))
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'badge-success' : 'badge-primary'
    }

    onTaskChange(event, task) {
        console.log("Task has changed")
    }
}
