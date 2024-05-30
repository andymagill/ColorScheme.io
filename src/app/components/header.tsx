import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/header.css';

export default function Header() {

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="logo">
        {/* TODO: create logo component */}
        ColorScheme.IO
      </div>

      <nav>
        <ul className="flex gap-1">
          <li><a href="/" className="p-1"><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
          <li><a href="/saved" className="p-1"><FontAwesomeIcon icon={faSave} /><span>Saved Schemes</span></a></li>
        </ul>
      </nav>
    </header>
  );
};


