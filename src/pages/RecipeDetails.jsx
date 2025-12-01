import React from 'react';
import { useParams } from 'react-router-dom';
import { RECIPES } from '../data/recipes';
import { useFavorites } from '../context/FavoritesContext';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = RECIPES.find((r) => r.id === id);
  const { toggle, favorites } = useFavorites();
  const isFav = favorites.some((f) => f.id === recipe?.id);

  if (!recipe) return <div className="p-8">Recipe not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{recipe.time} • {recipe.difficulty}</p>
      <button
        onClick={() => toggle(recipe)}
        className={`py-2 px-4 rounded-lg text-white mb-4 ${isFav ? 'bg-black' : 'bg-orange-500'}`}
      >
        {isFav ? 'Saved' : 'Save'}
      </button>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Steps</h2>
      <ol className="list-decimal pl-6">
        {recipe.steps.map((step, i) => (
          <li key={i} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}
