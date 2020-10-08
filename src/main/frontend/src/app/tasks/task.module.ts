export class Task {
    public id: number;
    public name: String;
    public completed: boolean;
    public dueDate: string;


    constructor(name: String, completed: boolean, dueDate: string) {
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
    }
}
