import "./login.scss";
import Img from "../../images/img-01.png";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch, isFetching } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post(" http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data.user.isAdmin && navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
        </div>
        <div className="right">
          <h1>Admin Login</h1>
          <form action="">
            <input
              type="email"
              placeholder="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleClick} disabled={isFetching}>
              Login
            </button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <span>admin login credentials</span>
          <span style={{ color: "green" }}>admin@gmail.com</span>
          <span style={{ color: "green" }}>Adminpassword1@</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
