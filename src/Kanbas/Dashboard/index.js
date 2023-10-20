import { Link } from "react-router-dom";
import db from "../Database";
import { FaEdit, FaEllipsisV } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <main role="main" className="col-md-10 col-lg-10">
                <div className="content-wrapper">
                    <div className="fixed-header">
                        <div className="top-section">
                            <div className="dashboard">
                                Dashboard
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="inner-content">
                        <div className="published-courses">Published Courses(24)</div>
                        <hr/>
                        <div className="row">
                          {courses.map((course) => (
                            <div className="course-card col-md-3 col-lg-3">
                            <div className="card">
                                <div className="upper-half back-dblue">
                                    <FaEllipsisV className="dots"/>
                                </div>
                                <div className="lower-half">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                        <div className="font-dblue">{course.name}</div>
                                        <div className="course-name">{course.number}</div>
                                        <div className="course-term">{course.startDate}</div>
                                        <FaEdit/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                          ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    </div>
  );
}
export default Dashboard;