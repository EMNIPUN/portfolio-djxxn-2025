import React from 'react';
import { LucideIcon } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <LucideIcon icon="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LucideIcon icon="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <LucideIcon icon="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;