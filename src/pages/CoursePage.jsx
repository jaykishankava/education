// src/pages/CoursePage.jsx
import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import ReactPlayer from 'react-player';

const CoursePage = () => {
  const { courseId } = useParams();
  const { courses, deleteCourse } = useContext(CourseContext);
  const navigate = useNavigate(); // Use navigate to redirect after deletion
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return <div className="container mx-auto p-4">Course not found.</div>;
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      deleteCourse(course.id);
      navigate('/'); // Redirect to the homepage after deletion
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <img 
        src={course.imageUrl || 'https://via.placeholder.com/800x400.png?text=No+Image'} 
        alt={course.title} 
        className="w-[500px] rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      
      {/* Using ReactPlayer to handle video playback */}
      {course.videoUrl ? (
        <ReactPlayer 
          url={course.videoUrl} 
          controls 
          className="w-[300px] rounded-lg shadow-lg mb-6"
        />
      ) : (
        <p>No video available for this course.</p>
      )}

<Link to="/" className="bg-red-600 p-2 hover:text-blue-300 rounded text-white">delete</Link>
    </div>
  );
};

export default CoursePage;
