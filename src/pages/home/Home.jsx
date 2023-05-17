import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Home;
