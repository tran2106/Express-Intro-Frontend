import React, { useState } from "react";
import axios from "axios";
import "./AddTaskStyles.css";

const AddTask = ({ setNavBarSetting, fetchAllTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://sequelize-intro-starting-point-xi.vercel.app/api/tasks", {
        title,
        description,
      });
      fetchAllTasks();
      setNavBarSetting("All Tasks");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="add-task-container">
      <h1>Add a Task</h1>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
