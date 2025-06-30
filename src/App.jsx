import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";

const App = () => {
  const [navBarSetting, setNavBarSetting] = useState("All Tasks");
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("https://sequelize-intro-starting-point-xi.vercel.app/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar
        navBarSetting={navBarSetting}
        setNavBarSetting={setNavBarSetting}
      />
      {navBarSetting === "Add Task" && (
        <AddTask
          fetchAllTasks={fetchAllTasks}
          setNavBarSetting={setNavBarSetting}
        />
      )}
      {navBarSetting !== "Add Task" && (
        <div className="app">
          <TaskList
            tasks={tasks}
            fetchAllTasks={fetchAllTasks}
            navBarSetting={navBarSetting}
          />
        </div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
