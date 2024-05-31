import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/header.css';

export default function Header() {

  return (
    <header className="bg-gray-700 text-white">
      <div className='wrapper flex items-center justify-between max-w-7xl p-4'>
        <div className="logo">
          {/* TODO: create logo component */}
          ColorScheme.IO
        </div>

        <nav>
          <ul className="flex gap-2">
            <li>
              <a href="/" className="inline-block p-2">
                <FontAwesomeIcon icon={faHome} className="mr-2 leading-none"/>
                <span className='inline-block leading-none'>Home</span>
              </a>
            </li>

            <li>
              <a href="/saved" className='inline-block p-2'>
                <FontAwesomeIcon icon={faSave} className='mr-2 leading-none'/>
                <span className='inline-block leading-none'>Saved Schemes</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


