import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import '../styles/components/header.css';

export default function Header() {

  const navigationItems = [
    { path: '/', title: 'Home', icon: <FontAwesomeIcon icon={faHome} /> },
    { path: '/saved', title: 'Saved Schemes', icon: <FontAwesomeIcon icon={faSave} /> },
  ];

  return (
    <header className="bg-gray-700 text-white">
      <div className='wrapper flex items-center justify-between max-w-7xl p-4'>
        <div className="logo">
          {/* TODO: create logo component */}
          ColorScheme.IO
        </div>

        <Navbar navItems={navigationItems} />
      </div>
    </header>
  );
};


