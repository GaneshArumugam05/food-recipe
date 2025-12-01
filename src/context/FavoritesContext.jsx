import React, { createContext, useContext, useState, useCallback } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback((recipe) => {
    const isFav = favorites.some(fav => fav.id === recipe.id);
    if (isFav) {
      setFavorites(prev => prev.filter(fav => fav.id !== recipe.id));
    } else {
      setFavorites(prev => [...prev, recipe]);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
