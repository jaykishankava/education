// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import CourseCatalog from './components/CourseCatalog';
import CoursePage from './pages/CoursePage';
import DashboardPage from './pages/DashboardPage';
import { CourseProvider } from './context/CourseContext';

const App = () => {
  return (
    <CourseProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/courses/:courseId" element={<CoursePage />} /> {/* Route for individual courses */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
};

export default App;
