// src/components/UserDashboard.jsx
import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { enrolledCourses } = useContext(CourseContext) || { enrolledCourses: [] }; // Fallback to an empty array

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">No enrolled courses.</p>
      ) : (
        <ul className="space-y-4">
          {enrolledCourses.map(course => (
            <li key={course.id} className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-bold text-xl">{course.title}</h2>
              <p className="text-gray-700">Progress: {course.progress}%</p>
              <Link 
                to={`/courses/${course.id}`} 
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Resume Lesson
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserDashboard;
