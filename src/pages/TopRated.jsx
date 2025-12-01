import React, { useEffect, useState } from 'react';
import RecipeGrid from '../components/RecipeGrid';
import { RECIPES } from '../data/recipes';

export default function TopRated() {
  const [topRatedRecipes, setTopRatedRecipes] = useState([]);

  useEffect(() => {
    const sortedRecipes = [...RECIPES]
      .filter(r => r.rating && r.rating >= 4.0)
      .sort((a, b) => b.rating - a.rating);
    setTopRatedRecipes(sortedRecipes);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400">
        Top Rated Recipes
      </h1>
      {topRatedRecipes.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No top rated recipes available.</p>
      ) : (
        <RecipeGrid recipes={topRatedRecipes} />
      )}
    </div>
  );
}
