import react from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <NavLink to="home">
        <span>Home</span>
      </NavLink>
      <NavLink to="settings">
        <span>Settings</span>
      </NavLink>
      <NavLink to="usage">
        <span>Usage</span>
      </NavLink>
      <NavLink to="chart">
        <span>Chart</span>
      </NavLink>
    </div>
  );
}
