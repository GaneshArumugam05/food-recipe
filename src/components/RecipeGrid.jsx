import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes }) {
  if (!recipes.length) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No recipes found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
