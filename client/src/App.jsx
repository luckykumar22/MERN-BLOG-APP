import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((user) => {
        setUser(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
