// src/components/Homepage.jsx
import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { courses } = useContext(CourseContext);
  
  const featuredCourses = courses.filter(course => course.isFeatured);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Featured Courses</h1>
      
      {featuredCourses.length === 0 ? (
        <p>No featured courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map(course => (
            <div 
              key={course.id} 
              className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img 
                src={course.imageUrl || 'https://via.placeholder.com/300x200.png?text=No+Image'} 
                alt={course.title} 
                className="h-40 w-full object-cover rounded-lg mb-2"
              />
              <h2 className="font-bold text-xl mb-2">{course.title}</h2>
              <p className="mb-4">{course.description}</p>
              <Link 
                to={`/courses/${course.id}`} 
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
