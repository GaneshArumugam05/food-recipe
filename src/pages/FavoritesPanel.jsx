import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeGrid from '../components/RecipeGrid';

export default function FavoritesPanel() {
  const { favorites } = useFavorites();

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">You haven't saved any recipes yet.</p>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}
    </section>
  );
}
