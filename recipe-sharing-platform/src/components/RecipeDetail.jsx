import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cerchiamo la ricetta che ha l'ID corrispondente a quello nell'URL
    const recipeFound = recipeData.find((item) => item.id === parseInt(id));
    
    if (recipeFound) {
      setRecipe(recipeFound);
    } else {
      // Se non trova la ricetta, torna alla home (opzionale)
      // navigate('/'); 
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div className="text-center mt-10">Caricamento...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Pulsante per tornare indietro */}
      <button 
        onClick={() => navigate('/')}
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow"
      >
        &larr; Torna alla Home
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
        {/* Immagine Hero */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-80 object-cover" 
        />

        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{recipe.title}</h1>
          <p className="text-gray-600 mb-6 text-lg">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lista Ingredienti */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Ingredienti</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Istruzioni */}
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Istruzioni</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {recipe.instructions && recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;