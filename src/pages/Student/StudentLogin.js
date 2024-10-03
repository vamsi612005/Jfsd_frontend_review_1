import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    // const credentials = { email, password };

    // try {
    //   const response = await fetch('http://localhost:8080/api/students/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(credentials),
    //   });

    //   if (response.ok) {
        navigate('/student/home'); // Navigate to home page on successful login
    //   } else {
    //     const errorData = await response.json();
    //     setError(errorData.message || 'Login failed');
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    //   setError('Login failed. Please try again.');
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Student Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account? <a href="/student/register">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
