import { useContext, useState } from "react";
import axios from "axios";
import "../App.css";
import { userContext } from "../App";


function CreatePost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const user = useContext(userContext);

  const handlePost = (e) => {
    e.preventDefault();
    const formData= new FormData()
    formData.append('title',title)
    formData.append('description',description)
    formData.append("email", user.email);
    formData.append('file',file)
    axios
      .post("http://localhost:3000/create",formData)
      .then((res) => {
        if (res.data === "Success") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handlePost}>
          <h2>Create Post</h2>
          <input
            placeholder="Enter Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Description"
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="file"
            placeholder="Select File"
          />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
