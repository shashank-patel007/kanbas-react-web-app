import { useParams } from "react-router";
import db from '../../Database';
import { FaCheckCircle, FaClipboard, FaEllipsisV, FaGripVertical } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from "react-router-dom";

function Assignments() {
    const {courseId} = useParams();
    console.log(courseId);
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    console.log(courseAssignments);
    return (
        <div>
            <div className="col-md-9 right-content">
            <div className="row">
                    <div className="col-7">
                        <input type="text" className="form-control margin-top input-text-width" placeholder="Search for Assignments" id="Assignment-Names"/>
                    </div>
                    <div className="col-5 margin-top">
                        <button type="button" className="btn btn-light float-right">+ Group</button>    
                        <button type="button" className="btn btn-danger float-right">+ Assignment</button>
                        <button type="button" className="btn btn-light float-right">
                            <FaEllipsisV className="black-color"/>
                        </button>
                        
                        <div className="dropdown-menu ">
                            <button className="dropdown-item" type="button" id="edit-assignment-dates">Edit Assignment Dates</button>
                            <button className="dropdown-item" type="button" id="speed-grader">Speed Grader</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop:'20px'}}/>
            <div className="row margin-top-20">
                <div className="col-12 assignment-container d-flex align-items-center custom-background custom-right-padding height">
                    <div className="p-container custom-background set-heading">
                        <FaGripVertical className="black-color"/>
                        <p className="assignment-title mb-0 custom-font-size margin-left-5">ASSIGNMENTS</p>
                    </div>
                    <div className="custom-left-padding">
                        <button className="oval-button custom-background">40% of Total</button>
                        <button className="custom-background" style={{border: 0}}>+</button>
                        <FaEllipsisV className="black-color"/>
                    </div>
                </div>
            </div>
            <div className="list-group">
            {courseAssignments.map((assignment) => (
            <div className="row left-border">
                <div className="d-flex align-items-center padding-top-10">
                    <div className="drag-handle margin-bottom-20" draggable="true">
                        <button type="button" className="left-button-setup">
                            <FaGripVertical className="black-color"/>
                        </button>
                        <button type="button" className="left-button-setup">
                            <FaClipboard className="pad-color"/>
                        </button>
                    </div>
                    <div>
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="set-font-style"
                        >
                            {assignment.title}
                        </Link>
                        <p className="assignment-text">
                            week 0 - SETUP - Week starting Monday September 5th (09/05/2022) Module | <br/>
                            <b>Due</b> Sept 18, 2022 at 11:59pm | 100 pts
                        </p>
                    </div>
                    <div className="margin-bottom-20 margin-left">
                        <button type="button" className="button-setup" disabled>
                            <FaCheckCircle className="correct-symbol"/>
                        </button>
                        <button type="button" className="button-setup">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
            ))}
            </div>
            <div class="row margin-top-30">
                <h2>QUIZZES 10% of Total
                    <select id="assignment-dropdown-2">
                        <option value="EDIT" selected>Edit</option>
                        <option value="SPEED-GRADER">Speed Grader</option>
                        <option value="DUPLICATE">Duplicate</option>
                        <option value="DELETE">Delete</option>
                        <option value="MOVE-TO">Move To...</option>
                        <option value="SEND-TO">Send To...</option>
                        <option value="COPY-TO">Copy To...</option>
                        <option value="SHARE-TO-COMMONS">Share to Commons</option>
                    </select>
                </h2>
                <ul>
                    <li>
                        <a href="#">Q1 - HTML</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>
                    <li>
                        <a href="#">Q2 - CSS</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>
                    <li>
                        <a href="#">Q3 - JS, ES6</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>
                    <li>
                        <a href="#">Q4 - NODE</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>
                    <li>
                        <a href="#">Q5 - MONGO</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>   
                </ul>
            </div>
            <div class="row">
                <h2>EXAMS 20% of Total
                    <select id="assignment-dropdown-3">
                        <option value="EDIT" selected>Edit</option>
                        <option value="SPEED-GRADER">Speed Grader</option>
                        <option value="DUPLICATE">Duplicate</option>
                        <option value="DELETE">Delete</option>
                        <option value="MOVE-TO">Move To...</option>
                        <option value="SEND-TO">Send To...</option>
                        <option value="COPY-TO">Copy To...</option>
                        <option value="SHARE-TO-COMMONS">Share to Commons</option>
                    </select>
                </h2>
                <ul>
                    <li>
                        <a href="#">Midterm</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>
                    <li>
                        <a href="#">Final</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>   
                </ul>
            </div>
            <div class="row">                   
                <h2>PROJECT 30% of Total
                    <select id="assignment-dropdown-4">
                        <option value="EDIT" selected>Edit</option>
                        <option value="SPEED-GRADER">Speed Grader</option>
                        <option value="DUPLICATE">Duplicate</option>
                        <option value="DELETE">Delete</option>
                        <option value="MOVE-TO">Move To...</option>
                        <option value="SEND-TO">Send To...</option>
                        <option value="COPY-TO">Copy To...</option>
                        <option value="SHARE-TO-COMMONS">Share to Commons</option>
                    </select>
                </h2>
                <ul>
                    <li>
                        <a href="#">Project</a><br/>
                        <a href="#">Multiple Modules</a> | Not available yet
                    </li>  
                </ul>
            </div>
        </div>
    );
}

export default Assignments;