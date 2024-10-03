import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    // Navigate to the add assignment page or trigger a modal for assignment creation
    navigate('/teacher/add-assignment'); // Adjust the route as necessary
  };

  const handleViewSubmissions = () => {
    // Navigate to the view submissions page or open a modal
    navigate('/teacher/view-submissions'); // Adjust the route as necessary
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to the Teacher Dashboard</h1>
      <p>This is your course management system.</p>

      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={handleAddAssignment}>
          Add Assignment
        </button>
        <button className="btn btn-secondary" onClick={handleViewSubmissions}>
          View Submissions
        </button>
      </div>
    </div>
  );
}

export default Home;
