import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic, e.g., clearing tokens, navigating to login page
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Welcome to the Student Dashboard</h2>
          <p className="card-text text-center">
            This is your home page where you can access various features.
          </p>

          <h3 className="mt-4">Available Options:</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <button className="btn btn-primary w-100" onClick={() => navigate('/student/courses')}>
                View Courses
              </button>
            </li>
            <li className="list-group-item">
              <button className="btn btn-primary w-100" onClick={() => navigate('/student/profile')}>
                View Profile
              </button>
            </li>
            <li className="list-group-item">
              <button className="btn btn-primary w-100" onClick={() => navigate('/student/notifications')}>
                Check Notifications
              </button>
            </li>
            {/* Add more options as needed */}
          </ul>

          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
