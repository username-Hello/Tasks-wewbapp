import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Task} from './task.module';

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<any> {
        return this.http.get("/api/tasks");
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post("/api/tasks/save", task);
    }

    addTask(task: Task) {
        return this.http.post("/api/tasks/save", task);
    }
}
