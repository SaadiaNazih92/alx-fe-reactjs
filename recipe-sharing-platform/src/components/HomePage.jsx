import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Ricette Deliziose</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              
              {/* MODIFICA QUI: Link che porta a /recipe/{id} */}
              <Link 
                to={`/recipe/${recipe.id}`} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Vedi Ricetta
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;