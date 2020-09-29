package com.usernamehello.tasks.repositories;

import com.usernamehello.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
