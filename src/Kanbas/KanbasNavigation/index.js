import { Link, useLocation } from "react-router-dom";
import './styles.css';
import logo from "../../images/northeastern.jpg"
import 'bootstrap/dist/css/bootstrap.css'
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelopeOpenText, FaClock, FaTv, FaArrowAltCircleRight, FaQuestionCircle } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const location = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      <div className="container-fluid">
        <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar">
                <div className="sidebar-logo">
                    <img src={logo} alt={"Company Logo"} width={80}/>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className={location.pathname.includes("Account") ? "nav-link active" : "nav-link"} href="#">
                            <FaUserCircle className="icon-style"/><br/>
                            <span className="menu-text" style={{color: "white"}}>Account</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className={location.pathname.includes("Dashboard") ? "nav-link active" : "nav-link"} to={"/Kanbas/Dashboard"}>
                            <FaTachometerAlt className="icon-style text-danger"/><br/>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className={location.pathname.includes("Courses") ? "nav-link active" : "nav-link"} to={"/Kanbas/Courses"}>
                            <FaBook className="icon-style text-danger"/><br/>
                            Courses
                    </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaCalendarAlt className="icon-style text-danger"/><br/>
                            Calendar
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaEnvelopeOpenText className="icon-style text-danger"/><br/>
                            Inbox
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaClock className="icon-style text-danger"/><br/>
                            History
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaTv className="icon-style text-danger"/><br/>
                            Studio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaArrowAltCircleRight className="icon-style text-danger"/><br/>
                            Commons
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaQuestionCircle className="icon-style text-danger"/><br/>
                            Help
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
  );
}
export default KanbasNavigation;