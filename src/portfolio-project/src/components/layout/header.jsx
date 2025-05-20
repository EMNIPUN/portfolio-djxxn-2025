import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import ThemeToggle from '../ui/theme-toggle';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">My Portfolio</Link>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;