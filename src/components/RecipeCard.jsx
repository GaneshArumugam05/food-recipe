import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useFavorites } from '../context/FavoritesContext';

export default function RecipeCard({ recipe }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative"
    >
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">{recipe.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{recipe.description}</p>
        </div>
      </Link>
      <button
        onClick={() => toggleFavorite(recipe)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition shadow-lg focus:outline-none"
      >
        {isFavorite ? <HiHeart className="text-orange-500" size={24} /> : <HiOutlineHeart size={24} />}
      </button>
    </motion.div>
  );
}
