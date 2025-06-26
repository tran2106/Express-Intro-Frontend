import React from "react";
import axios from "axios";
import "./TaskCardStyles.css";

const TaskCard = ({ task, fetchAllTasks }) => {
  const handleCompleteTask = async () => {
    try {
      await axios.patch(`http://localhost:8080/api/tasks/${task.id}`, {
        completed: !task.completed,
      });
      fetchAllTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
      <div className="task-card-header">
        <h2>{task.title}</h2>
        {task.completed ? (
          <p onClick={handleCompleteTask}>🔄</p>
        ) : (
          <p onClick={handleCompleteTask}>✅</p>
        )}
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
