import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RECIPES } from '../data/recipes'; // Your recipes data source
import { motion } from 'framer-motion';
import { HiShoppingBag, HiClipboardList, HiCheckCircle } from 'react-icons/hi';
import { useFavorites } from '../context/FavoritesContext';

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const foundRecipe = RECIPES.find((r) => r.id === id);
    setRecipe(foundRecipe || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-red-500 dark:text-red-400">
        Recipe not found.
      </div>
    );
  }

  const isFav = favorites.some((f) => f.id === recipe.id);

  return (
    <motion.div
      className="max-w-7xl mx-auto p-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-orange-500 mb-12 text-center">{recipe.title}</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Recipe Image */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>

        {/* Ingredients */}
        <section className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md lg:w-1/3 max-h-[600px] overflow-y-auto">
          <h2 className="flex items-center gap-3 text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">
            <HiShoppingBag size={32} /> Ingredients
          </h2>
          <ul className="space-y-3 text-gray-900 dark:text-gray-100 text-lg">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <HiCheckCircle className="text-orange-500 dark:text-orange-400 flex-shrink-0" />
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md lg:w-1/3 max-h-[600px] overflow-y-auto mt-8 lg:mt-0">
          <h2 className="flex items-center gap-3 text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">
            <HiClipboardList size={32} /> Steps
          </h2>
          <ol className="space-y-6 text-gray-900 dark:text-gray-100 text-lg list-none">
            {recipe.steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 rounded-full bg-orange-500 text-white font-bold h-6 w-6 flex justify-center items-center select-none">
                  {idx + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Toggle Favorite Button */}
      <button
        onClick={() => toggleFavorite(recipe)}
        className={`mt-8 py-2 px-6 rounded-lg text-white mb-4 ${
          isFav ? 'bg-black' : 'bg-orange-500'
        }`}
      >
        {isFav ? 'Saved' : 'Save'}
      </button>
    </motion.div>
  );
}
