// src/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onAddClick }) {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">TaskFlow</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"> 
              <Link 
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
                to="/"
              >
                TASK LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === "/add" ? "active" : ""}`} 
                to="/add"
              >
                ADD TASK
              </Link>
            </li>
          </ul>

          <button className="btn btn-outline-light" onClick={onAddClick}>+ Add Task</button>
        </div>
      </div>
    </nav>
  );
}
