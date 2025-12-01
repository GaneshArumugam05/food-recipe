import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  HiMenu,
  HiX,
  HiSun,
  HiMoon,
  HiHeart,
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();

  const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Categories', path: '/categories' },
  { label: 'Top Rated', path: '/top-rated' },
];


  const closeMenu = () => setMenuOpen(false);
  const closeFav = () => setFavOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">

        {/* Logo */}
        <Link to="/" onClick={() => { closeMenu(); closeFav(); }} className="flex items-center space-x-3">
          <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            <span className="text-white font-extrabold text-3xl">R</span>
          </div>
          <span className="text-gray-900 dark:text-gray-100 font-bold text-xl tracking-wide">RecipeApp</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex md:items-center space-x-8">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive
                  ? 'text-orange-500 dark:text-orange-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400') +
                ' transition px-3 py-2 rounded-md'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center space-x-4">

          {/* Favorites count icon - always visible top right */}
          <button
            onClick={() => setFavOpen(true)}
            aria-label="Open favorites"
            className="relative text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none"
          >
            <HiHeart size={28} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs font-semibold select-none">
                {favorites.length}
              </span>
            )}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-orange-500 dark:text-orange-400 p-2 rounded-md hover:bg-orange-600 hover:text-white transition"
          >
            {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-md focus:outline-none hover:text-orange-500 dark:hover:text-orange-400"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 shadow-inner"
          >
            <nav className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    (isActive
                      ? 'bg-orange-500 text-white font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-orange-600 hover:text-white') +
                    ' rounded-md px-3 py-2 transition'
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Favorites modal */}
      <AnimatePresence>
        {favOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start pt-24 p-4 z-50"
            onClick={closeFav}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full shadow-lg overflow-y-auto max-h-[75vh] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                Your Favorites
              </h2>

              {favorites.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300">No favorite recipes saved yet.</p>
              ) : (
                <ul className="divide-y divide-gray-300 dark:divide-gray-700 max-h-[60vh] overflow-y-auto">
                  {favorites.map((fav) => (
                    <li key={fav.id} className="py-2 px-2 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                      <Link
                        to={`/recipe/${fav.id}`}
                        onClick={closeFav}
                        className="block font-medium text-lg hover:text-orange-500 dark:hover:text-orange-400"
                      >
                        {fav.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={closeFav}
                className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
