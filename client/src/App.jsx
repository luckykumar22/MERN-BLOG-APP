import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Post from "./components/Post";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    username: null,
    email: null,
  });

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
          <Route path="/create" element={<CreatePost />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/editpost/:id" element={<EditPost />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
