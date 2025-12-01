import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function CommonFooter({
  companyName = "Your Company",
  year = new Date().getFullYear(),
  links = [],
  socials = [],
}) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright Text */}
        <div className="text-center md:text-left text-sm select-none">
          © {year} {companyName}. All rights reserved.
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm font-medium">
          {links.length > 0 ? (
            links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-orange-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))
          ) : (
            <>
              <a href="/about" className="hover:text-orange-500">About</a>
              <a href="/contact" className="hover:text-orange-500">Contact</a>
              <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
              <a href="/terms" className="hover:text-orange-500">Terms of Service</a>
            </>
          )}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center md:justify-start text-gray-700 dark:text-gray-300">
          {socials.length > 0 ? socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="hover:text-orange-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          )) : (
            <>
              <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <FaGithub size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <FaLinkedin size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                <FaFacebook size={20} />
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
