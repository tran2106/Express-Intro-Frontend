import React from "react";
import "./NavBarStyles.css";

const NavBar = ({ navBarSetting, setNavBarSetting }) => {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={navBarSetting === "All Tasks" ? "active" : ""}
          onClick={() => setNavBarSetting("All Tasks")}
        >
          All Tasks
        </li>
        <li
          className={navBarSetting === "Completed Tasks" ? "active" : ""}
          onClick={() => setNavBarSetting("Completed Tasks")}
        >
          Completed Tasks
        </li>
        <li
          className={navBarSetting === "Incomplete Tasks" ? "active" : ""}
          onClick={() => setNavBarSetting("Incomplete Tasks")}
        >
          Incomplete Tasks
        </li>
        <li
          className={navBarSetting === "Add Task" ? "active" : ""}
          onClick={() => setNavBarSetting("Add Task")}
        >
          Add Task
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
