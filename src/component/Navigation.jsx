import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='items-center m-8 hover:text-sky-blue-400 '>
      <ul>
        <li className='p4'>
          <Link to="/" className='p4 hover:text-blue-600'>Home</Link>
        </li>
        <li className='p4' >
          <Link to="/about" className='p4 hover:text-blue-600'>About</Link>
        </li>
        <li className='p4'>
          <Link to="/skills" className='p4 hover:text-blue-600'>Skills</Link>
        </li>
        <li className='p4'>
          <Link to="/education" className='p4 hover:text-blue-600'>Education</Link>
        </li>
        <li className='p4'>
          <Link to="/experience" className='p4 hover:text-blue-600'>Experience</Link>
        </li>
        <li className='p4'>
          <Link to="/services" className='p4 hover:text-blue-600'>Services</Link>
        </li>
        <li className='p4'>
          <Link to="/blog" className='p4 hover:text-blue-600'>Blog</Link>
        </li>
        <li className='p4'>
          <Link to="/contact" className='p4 hover:text-blue-600'>Contact</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;