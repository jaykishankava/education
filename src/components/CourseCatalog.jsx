// src/components/CourseCatalog.jsx
import React, { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Link } from 'react-router-dom';

const CourseCatalog = () => {
  const { courses, enrollCourse } = useContext(CourseContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'JavaScript'];

  const filteredCourses = courses.filter(course => {
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Course Catalog</h2>

      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search courses..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map(course => (
          <div key={course.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
            <p className="mt-2"><strong>Category:</strong> {course.category || 'General'}</p>
            <Link
              to='/dashboard'
              className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              onClick={() => enrollCourse(course.id)} // Enroll action
            >
              Enroll
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
