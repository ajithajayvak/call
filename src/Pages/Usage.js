import { useState, useEffect } from "react";
import axios from "axios";
import "./Usage.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
function Usage() {
  const [data, setData] = useState([]);
  const [searchparams, setSearchparams] = useSearchParams();
  const cls = searchparams.get("class");
  const navigate = useNavigate();
  useEffect(() => {
    axios("data.json").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="page users">
      {data
        .filter((item) => {
          if (!cls) {
            return true;
          } else {
            return cls === item.class;
          }
        })

        .map((item) => {
          return (
            <div
              className="users-item"
              onClick={() => {
                navigate(`/details/${item.id}`);
              }}
            >
              <div className="title">{item.name}</div>
              <div className="descr">{item.username}</div>
              <div className="descr">{item.class}</div>
            </div>
          );
        })}
    </div>
  );
}
export default Usage;
