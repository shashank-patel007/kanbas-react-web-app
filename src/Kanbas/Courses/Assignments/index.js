import { useNavigate, useParams } from "react-router";
import { FaCheckCircle, FaClipboard, FaEllipsisV, FaGripVertical } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
    const {courseId} = useParams();
    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
          .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
    }, [courseId]);    
    const navigate = useNavigate();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);
    
    const confirmDelete = () => {
        dispatch(deleteAssignment(assignmentToDelete))
        setShowConfirmation(false);
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const setdeleteAssignment = (assignmentId) => {
        setAssignmentToDelete(assignmentId);
        setShowConfirmation(true);
    };

    const createNewAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
          dispatch(deleteAssignment(assignmentId));
        });
    };
    
    
    return (
        <div style={{marginLeft: 5, width: 1100}}>
            <div className="col-md-9 right-content" style={{width:880}}>
            <div className="row">
                    <div className="col-7">
                        <input type="text" className="form-control margin-top input-text-width" placeholder="Search for Assignments" id="Assignment-Names"/>
                    </div>
                    <div className="col-5 margin-top">
                        <button type="button" className="btn btn-light float-right">+ Group</button>    
                        <button type="button" className="btn btn-danger float-right" onClick={createNewAssignment}>+ Assignment</button>
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
                                {assignment.title} - {assignment.description}
                            </Link>
                            <p className="assignment-text">
                                week 0 - SETUP - Week starting {assignment.startDate} Module | <br/>
                                <b>Due</b> {assignment.dueDate} at 11:59pm | 100 pts
                            </p>
                        </div>
                        <div className="margin-bottom-20 margin-left">
                            <button className='btn btn-danger' onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>
                            <button type="button" className="button-setup" disabled>
                                <FaCheckCircle className="correct-symbol"/>
                            </button>
                            <button type="button" className="button-setup">
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>
                    <hr style={{margin: "0rem"}}/>
                </div>
                ))} 
                {showConfirmation && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this assignment?</p>
                    <button className="btn btn-outline-success" onClick={confirmDelete}>Yes</button>
                    <button className="btn btn-outline-danger deleteButton" onClick={cancelDelete}>No</button>
                    <button className="btn btn-outline-danger deleteButton" onClick={cancelDelete}>Cancel</button>
                </div>
                )}   
            </div>
            </div>
        </div>
    );
}

export default Assignments;