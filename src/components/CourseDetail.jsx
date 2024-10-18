// src/components/CourseDetail.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { courses } = useContext(CourseContext);
  const course = courses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-2">{course.description}</p>
      <h2 className="mt-4 font-semibold">Instructor: {course.instructor}</h2>
      <p>Difficulty: {course.difficulty}</p>
      <p>Category: {course.category}</p>
      <Link to="/dashboard" className="bg-blue-600 text-white p-2 rounded mt-4 inline-block">Enroll</Link>
    </div>
  );
};

export default CourseDetail;
