// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Education-Management</h1>
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded focus:outline-none focus:bg-blue-700"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={`flex-col md:flex-row md:flex md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-300">Course Catalog</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
