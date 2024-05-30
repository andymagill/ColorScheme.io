import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="logo">
        {/* TODO: create logo component */}
        ColorScheme.IO
      </div>

      <nav className="nav-icons">
        <ul>
          <li><a href="/" className="mx-2"><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
          <li><a href="/saved" className="mx-2"><FontAwesomeIcon icon={faSave} /><span>Saved Schemes</span></a></li>
        </ul>
      </nav>
    </header>
  );
};


