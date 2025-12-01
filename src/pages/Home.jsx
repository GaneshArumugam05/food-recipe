import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeGrid from '../components/RecipeGrid';
import { RECIPES } from '../data/recipes';

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(RECIPES);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredRecipes(RECIPES);
    } else {
      setFilteredRecipes(
        RECIPES.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(query.toLowerCase()) ||
            recipe.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        )
      );
    }
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <SearchBar onSearch={handleSearch} />
      <RecipeGrid recipes={filteredRecipes} />
    </section>
  );
}
