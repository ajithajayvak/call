import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  NavLink,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Marks from "./Marks";
import Price from "./Price";
import Score from "./Score";
function Details() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios("/data.json").then((response) => {
      const item = response.data.find(
        (userItem) => userItem.id === parseInt(userId)
      );
      setUser(item);
    });
  });
  return (
    <div className="page">
      <div>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>class: {user.class}</div>
      <div className="submenu">
        <NavLink to="marks">Marks</NavLink>
        <NavLink to="score">Score</NavLink>
        <NavLink to="price">Price</NavLink>
      </div>
      <div>
        <Outlet context={user} />
      </div>
      <button
        onClick={() => {
          navigate("/usage");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Details;
