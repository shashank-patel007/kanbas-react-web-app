import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [score, setScore] = useState(assignment.score);
  const [completed, setCompleted] = useState(assignment.completed);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/a5/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  const updateScore = async (newScore) => {
    try {
      const response = await axios.get(`${URL}/score/${newScore}`);
      setAssignment(response.data);
      setScore(newScore);
    } catch (error) {
      console.error('Failed to update score', error);
    }
  };
  const updateCompleted = async (newCompleted) => {
    try {
      const response = await axios.get(`${URL}/completed/${newCompleted}`);
      setAssignment(response.data);
      setCompleted(newCompleted); // Update completed state if the backend call was successful
    } catch (error) {
      console.error('Failed to update completed status', error);
    }
  };
  useEffect(() => {
    fetchAssignment();
    setScore(assignment.score);
    setCompleted(assignment.completed);
  }, [assignment.score,assignment.completed]);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
      <button onClick={updateTitle}
              className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <h4>Modifying Score</h4>
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="form-control mb-2 w-75"
      />
      <a
        href={`${URL}/score/${score}`}
        onClick={() => updateScore(score)}
        className="btn btn-primary me-2"
      >
        Update Score
      </a>

      <h4>Modifying Completed Status</h4>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        className="form-check mb-2"
      />
      <a
        href={`${URL}/completed/${completed}`}
        onClick={() => updateCompleted(completed)}
        className="btn btn-primary me-2"
      >
        Update Completed Status
      </a>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${API_BASE}/a5/assignment/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;