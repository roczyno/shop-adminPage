import "./App.scss";

import Home from "./pages/home/Home";
import Image from "./pages/image/Image";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/video/Video";
import Pdf from "./pages/pdf/Pdf";
import Audio from "./pages/audio/Audio";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="/video" element={<Video />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
