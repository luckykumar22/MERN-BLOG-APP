import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { userContext } from "../App";
import { useContext } from "react";
import axios from "axios";

function Navbar() {
  const user = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/logout")
      .then((res) => {
        if (res.data === "Success") navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar-header">
      <div>
        <h3>Blog App</h3>
      </div>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        {user.username ? (
          <Link to="/create" className="link">Create</Link>
        ) : (
          <></>
        )}

        <Link to="/contact" className="link">Contact</Link>
      </div>
      {user.username ? (
        <div>
          <button className="btn-input" onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h5>
            <Link to="/register" className="link">
              Register/Login
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
}

export default Navbar;
