import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simuliamo il caricamento dei dati impostandoli nello stato
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Ricette Deliziose</h1>
      
      {/* GRIGLIA RESPONSIVE:
          - grid-cols-1: 1 colonna su cellulari (default)
          - sm:grid-cols-2: 2 colonne su tablet
          - lg:grid-cols-3: 3 colonne su schermi grandi
          - gap-8: spazio tra le schede
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            {/* Immagine */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-40 object-cover" 
            />
            
            {/* Contenuto della scheda */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Vedi Ricetta
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;