import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, fetchAllTasks, navBarSetting }) => {
  const filteredTasks = tasks.filter((task) => {
    if (navBarSetting === "All Tasks") return true;
    if (navBarSetting === "Completed Tasks") return task.completed;
    if (navBarSetting === "Incomplete Tasks") return !task.completed;
  });

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} fetchAllTasks={fetchAllTasks} />
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;
