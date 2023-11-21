import { useNavigate, useParams, Link } from "react-router-dom";
import "../styles.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import * as client from "../client";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    console.log(assignmentId);
    const dispatch = useDispatch();
    const assignments = useSelector(state => state.assignmentsReducer.assignments);
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        const newAssignment = {
            _id: assignmentId,
            title: assignmentName,
            description: assignmentDesc,
            course: courseId,
            dueDate: assignmentDue,
            startDate: assignStart,
            endDate: assignEnd,
        };
        const handleAddAssignment = () => {
            client.createAssignment(courseId, newAssignment).then((assignment) => {
                dispatch(addAssignment(assignment));
            });
        };
        const handleUpdateAssignment = async () => {
            const status = await client.updateAssignment(newAssignment);
            dispatch(updateAssignment(newAssignment));
        };
        if (assignmentId === "new") {
            handleAddAssignment();
        } else {
            handleUpdateAssignment();
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const [assignmentName, setAssignmentName] = useState(
        assignmentId === "new" ? "" : assignment.title
    );
    const [assignmentDesc, setAssignmentDesc] = useState(
        assignmentId === "new" ? "" : assignment.description
    );
    const [assignmentDue, setAssignmentDue] = useState(
        assignmentId === "new" ? "" : assignment.dueDate
    );
    const [assignStart, setAssignStart] = useState(
        assignmentId === "new" ? "" : assignment.startDate
    );
    const [assignEnd, setAssignEnd] = useState(
        assignmentId === "new" ? "" : assignment.endDate
    );

    return (
        <div>
            <div class="col-md-9 right-content">
                <div class="row">
                    <div class="col-12">
                        <button type="button" class="btn btn-light float-right">
                            <FaEllipsisV className="black-color" />
                        </button>
                        <button type="button" class="published-button-setup float-right button-margin">
                            <FaCheckCircle className="button-color" />
                            <span class="button-color"><b>Published</b></span>
                        </button>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-12">
                        <label for="ASSIGNMENT-NAME text-align-left">
                            Assignment Name
                        </label>
                        <input id="ASSIGNMENT-NAME" type="text" value={assignmentName} onChange={(e) => setAssignmentName(e.target.value)} class="form-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <textarea cols="155" rows="5" class="form-control content-margin" value={assignmentDesc} onChange={(e) => setAssignmentDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 set-label content-margin">
                        <label for="points">Points</label>
                    </div>
                    <div class="col-7 content-margin">
                        <input type="text" value="100" id="points" class="form-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 set-label content-margin">
                        <label for="Assignment-Group">Assignment Group</label>
                    </div>
                    <div class="col-7 content-margin">
                        <select id="Assignment-Group" class="form-control">
                            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 set-label content-margin">
                        <label for="Display-Grade">Display Grade as</label>
                    </div>
                    <div class="col-7 content-margin">
                        <select id="Display-Grade" class="form-control">
                            <option value="PERCENTAGE" selected>Percentage</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 set-label content-margin">
                    </div>
                    <div class="col-7 content-margin">
                        <input type="checkbox" value="Text Entry"
                            name="check-entry-option" id="chkbox-entry" />
                        <label>Do not count this assignment towards final grade</label>
                    </div>
                </div>
                <div class="row">
                    <table width="94%" class="set-table content-margin">
                        <tr>
                            <td style={{ width: "29%" }} valign="top">
                                <label for="Submission-Type" class="content-margin float-right set-table-label">Submission Type</label>
                            </td>
                            <td style={{ border: '1px', solid: '#ccc', paddingLeft: '20px' }}>
                                <select id="Submission-Type" style={{ width: '92.55%', marginTop: '20px' }} class="form-control set-text-input">
                                    <option value="ONLINE" selected>Online</option>
                                </select><br />
                                <label for="Online Entry Option"><b>Online Entry Options</b></label><br />
                                <input type="checkbox" value="Text Entry" class="bigger-checkbox margin-left-5"
                                    name="check-entry-option" id="chkbox-entry" />
                                <label class="padding-left-5">Text Entry</label><br />
                                <input type="checkbox" value="Website-URL" class="bigger-checkbox margin-left-5"
                                    name="check-website-url" id="chkbox-website" />
                                <label class="padding-left-5">Website URL</label><br />
                                <input type="checkbox" value="Media-Recording" class="bigger-checkbox margin-left-5"
                                    name="check-media" id="chkbox-media" />
                                <label class="padding-left-5">Media Recording</label><br />
                                <input type="checkbox" value="Student-Annotation" class="bigger-checkbox margin-left-5"
                                    name="check-student-annotation" id="chkbox-student-annotation" />
                                <label class="padding-left-5">Student Annotation</label><br />
                                <input type="checkbox" value="File-Uploads" class="bigger-checkbox margin-left-5"
                                    name="check-file-uploads" id="chkbox-file-uploads" />
                                <label class="padding-left-5">File Uploads</label><br /><br />
                                <label for="submission-attempt"><b>Submission Attempts</b></label><br />
                                <select id="submission-attempt" class="form-control set-select">
                                    <option value="UNLIMITED" selected>Unlimited</option>
                                    <option value="ONCE">Once</option>
                                    <option value="TWICE">Twice</option>
                                    <option value="FIVE">Five</option>
                                </select>
                                <br />
                                <label for="plagarism-id"><b>Plagarism Review</b></label><br />
                                <select id="plagarism-id" class="form-control set-select">
                                    <option value="NONE" selected>None</option>
                                    <option value="YES">Yes</option>
                                </select>
                                <br />
                                <label for="Group-Assignment"><b>Group Assignment</b></label><br />
                                <input type="checkbox" id="group-id" class="bigger-checkbox margin-left-5" />
                                <label id="group-id">This is a group assignment</label><br /><br />
                                <label for="Peer-Reviews"><b>Peer Reviews</b></label><br />
                                <input type="checkbox" id="peer-review-id" class="bigger-checkbox margin-left-5" />
                                <label id="peer-review-id">Require Peer Reviews</label>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="row" id="assign-table">
                    <table width="94%" class="set-table content-margin">
                        <tr>
                            <td class="td-2" valign="top">
                                <label for="assign" class="content-margin float-right set-table-label">Assign</label>
                            </td>
                            <td class="set-table table-border padding-left">
                                <label for="assign-to"><b>Assign to</b></label><br />
                                <input class="form-control set-table-width" type="text" id="assign-to" value="Everyone" /><br />
                                <label id="due-id" class="control-label"><b>Due</b></label><br />
                                <input id="due-id" type="date" value={assignmentDue} onChange={(e) => setAssignmentDue(e.target.value)} class="form-control set-table-width" /><br />
                                <table class="set-table-width">
                                    <tr>
                                        <td style={{ width: '48.5%' }}>
                                            <label for="available-id"><b>Available From</b></label>
                                            <input id="available-id" type="date" value={assignStart} onChange={(e) => setAssignStart(e.target.value)} class="form-control" />
                                        </td>
                                        <td style={{ width: '48.5%' }}>
                                            <label for="until-id"><b>Until</b></label>
                                            <input id="until-id" type="date" value={assignEnd} onChange={(e) => setAssignEnd(e.target.value)} class="form-control" />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <table width="100%" class="table-background">
                                    <tr>
                                        <td>
                                            <button width="80%" type="button" class="form-control add-button">+Add</button>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div class="row">
                    <div class="col-5">
                        <input type="checkbox" id="group-id" class="bigger-checkbox left-margin" />
                        <label id="group-id"> Notify users that this content has changed</label>
                    </div>
                    <div class="col-7">
                        <form id="assignment_edit" action="../index.html">
                            <Link
                                to={`/Kanbas/Courses/${courseId}/Assignments`}
                            >
                                <button type="submit" onClick={handleCancel} class="btn btn-light float-right">Cancel</button>
                            </Link>
                            <button type="submit" onClick={handleSave} class="btn btn-danger float-right">Save</button>
                        </form>
                    </div>
                </div>
                <hr>
                </hr>
            </div>
        </div>
    );
}

export default AssignmentEditor;