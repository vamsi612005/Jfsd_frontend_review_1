import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoicePage from './pages/Extras/ChoicePage';
import Login from './pages/Teacher/Login'; // Your existing TeacherLogin component
import Register from './pages/Teacher/Register'; // Your existing TeacherRegister component
import StudentLogin from './pages/Student/StudentLogin';
import StudentRegister from './pages/Student/StudentRegister';
import Home from './pages/Teacher/Home'; // Your home component
import StudentHome from './pages/Student/StudentHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoicePage />} />
        <Route path="/teacher/login" element={<Login />} />
        <Route path="/teacher/register" element={<Register />} />
        <Route path="/teacher/home" element={<Home />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/home" element={<StudentHome />} />
      </Routes>
    </Router>
  );
}

export default App;
