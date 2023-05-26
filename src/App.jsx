import "./App.scss";

import Home from "./pages/home/Home";
import Image from "./pages/image/Image";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/video/Video";
import Pdf from "./pages/pdf/Pdf";
import Audio from "./pages/audio/Audio";
import { AuthContext } from "./context/AuthContext/AuthContext";
import { useContext } from "react";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
      <Routes>
        <Route index element={user ? <Home /> : <Login />} />
        <Route path="/image" element={user ? <Image /> : <Login />} />
        <Route path="/video" element={user ? <Video /> : <Login />} />
        <Route path="/audio" element={user ? <Audio /> : <Login />} />
        <Route path="/pdf" element={user ? <Pdf /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
