import React, { useState, useEffect } from 'react';
import RecipeGrid from '../components/RecipeGrid';
import { RECIPES } from '../data/recipes';

const getCategories = () => {
  const categoriesSet = new Set();
  RECIPES.forEach(recipe => {
    if (recipe.category) {
      categoriesSet.add(recipe.category);
    }
  });
  return Array.from(categoriesSet);
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const cats = getCategories();
    setCategories(cats);
    if (cats.length) setSelectedCategory(cats[0]);
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredRecipes(RECIPES);
    } else {
      setFilteredRecipes(
        RECIPES.filter(recipe => recipe.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400">
        Categories
      </h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedCategory === cat
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>
      <RecipeGrid recipes={filteredRecipes} />
    </div>
  );
}
