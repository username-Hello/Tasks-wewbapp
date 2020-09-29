package com.usernamehello.tasks.services;

import com.usernamehello.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
