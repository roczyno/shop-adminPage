import { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <span>Admin Dashboard</span>
      {user ? (
        <span onClick={handleLogout}>Logout</span>
      ) : (
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
