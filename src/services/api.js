import { RECIPES } from '../data/recipes'

export const fetchRecipes = async (query = '') => {
  await new Promise((r) => setTimeout(r, 200))
  if (!query) return RECIPES
  const q = query.toLowerCase()
  return RECIPES.filter(
    (r) => r.title.toLowerCase().includes(q) || (r.tags || []).join(' ').includes(q)
  )
}

export const fetchRecipeById = async (id) => {
  await new Promise((r) => setTimeout(r, 120))
  return RECIPES.find((r) => r.id === id)
}
