import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
  return (
    <BrowserRouter basename="/food-recipe">
      <ThemeProvider>
        <FavoritesProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 pt-20">
              <Router />
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
