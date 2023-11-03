import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { FaBars } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import Modules from "../Modules";
import { FaGlasses } from 'react-icons/fa';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses({courses}) {
    const { courseId } = useParams();
    const location = useLocation();
    const parts = location.pathname.split('/');
    const pageName = parts[parts.length - 1];
    const course = courses.find((course) => course._id === courseId);
    return (
        <div style={{width: '1100px'}}>
            <div class="top-section" style={{width: '1100px', display: 'flex'}}>
                <div class="menu-icon">
                    <FaBars/>
                </div>
                <div class="profile-name">
                    <nav aria-label="breadcrumb" style={{marginTop: '20px'}}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#" class="text-danger" style={{textDecoration: 'none'}}>{course ? course.name : courseId}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{pageName}</li>
                        </ol>
                    </nav>
                </div>
                <button class="btn btn-secondary float-end color-change" style={{marginLeft: '600px'}}>
                        <FaGlasses className="icon-space2"/>
                        Student View
                </button>
            </div>
            <CourseNavigation/>
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                    left: "320px",
                    top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                        path="Assignments/:assignmentId"
                        element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;