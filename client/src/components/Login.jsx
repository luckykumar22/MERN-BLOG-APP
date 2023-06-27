import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        if(res.data==='Success'){
          navigate('/')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signup_btn" type="submit">
            Login
          </button>
        </form>

        <br />
        <br />
        <p>New User?</p>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
