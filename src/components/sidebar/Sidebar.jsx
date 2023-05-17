import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/image">
        <span>Image</span>
      </Link>
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/video">
        <span>Video</span>
      </Link>
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/audio">
        <span>Audio</span>
      </Link>
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/pdf">
        <span>Pdf</span>
      </Link>
    </div>
  );
};

export default Sidebar;
