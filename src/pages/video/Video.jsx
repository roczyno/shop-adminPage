import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./video.scss";

const Video = () => {
  const [state, setState] = useState({
    title: "",
    desc: "",
  });
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const { title, desc } = state;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("desc", desc);

        setErrorMsg("");
        await axios.post("http://localhost:5000/api/videos/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        setErrorMsg("Please select a file to add.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/videos/find");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllVideos();
  });
  return (
    <div className="video">
      <Navbar />
      <div className="container">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Downloads</th>
                <th>Email Sent</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td>{item.download}</td>
                  <td>{item.emailsSent}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <span>Add Videos</span>
          <form onSubmit={handleUpload}>
            <input
              type="text"
              placeholder="Enter title"
              onChange={handleInputChange}
              name="title"
              value={state.title || ""}
            />
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter description"
              name="desc"
              value={state.desc || ""}
              onChange={handleInputChange}
            />
            <label>Description</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button
              type="submit"
              style={{
                padding: "10px",
                width: "100px",
                marginTop: "10px",
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Video;