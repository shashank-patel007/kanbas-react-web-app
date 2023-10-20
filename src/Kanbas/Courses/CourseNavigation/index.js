import { Link, useLocation, useParams } from 'react-router-dom';
import '../styles.css';

function CourseNavigation() {
    const links = ["Home","Modules","Piazza","Zoom Meetings",
    "Assignments","Quizzes","Grades","People","Panopto Video",
    "Discussions","Announcements","Pages","Files","Rubrics",
    "Outcomes","Collaborations","Syllabus","Settings"];
    const {courseId} = useParams();
    const {pathname} = useLocation();
    return (
        <>
            <nav class="col-md-3 d-md-block left-navigation">
                <ul>
                    {links.map((link,index) => (
                        <li>
                            <Link
                                key={index}
                                to={`/Kanbas/Courses/${courseId}/${link}`}
                                className={`list-group-item ${pathname.includes(link) ? "selected":""}`}>
                                {link}
                            </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </>
    );
}

export default CourseNavigation;