import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RecipePage from '../pages/RecipePage';
import About from '../pages/About';
import Categories from '../pages/Categories';
import TopRated from '../pages/TopRated';
import FavoritesPanel from '../pages/FavoritesPanel';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/favorites" element={<FavoritesPanel />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
