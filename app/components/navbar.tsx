
import Link from 'next/link';
import React from 'react';
import '../styles/components/navbar.css';

// Update the NavItem type to include an optional icon component
type NavItem = {
  path: string;
  title: string;
  icon?: React.ReactNode; 
};

// Define the props type for the Navbar component
interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <nav>
      <ul className="flex gap-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className="text-lg mr-6 hover:text-gray-300">
              {item.icon && item.icon} {/* Render the icon if it exists */}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
