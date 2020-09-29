package com.usernamehello.tasks.controllers;

import com.usernamehello.tasks.domain.Task;
import com.usernamehello.tasks.services.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public Iterable<Task> list(){
        return taskService.list();
    }

    @PostMapping("/save")
    public Task save(@RequestBody Task task) {
        return taskService.save(task);
    }
}
