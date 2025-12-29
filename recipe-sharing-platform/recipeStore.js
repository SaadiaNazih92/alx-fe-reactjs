import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  // Azione per cancellare una ricetta tramite ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  // Azione per aggiornare una ricetta esistente
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  setRecipes: (recipes) => set({ recipes }),
}));
