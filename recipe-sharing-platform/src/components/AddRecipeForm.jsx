import React, { useState } from 'react';

const AddRecipeForm = () => {
  // Stati per i campi del form
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // Stato per gli errori di validazione
  const [errors, setErrors] = useState({});

  // Funzione di validazione
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = "Il titolo della ricetta è obbligatorio.";
    }

    if (!ingredients) {
      newErrors.ingredients = "Gli ingredienti sono obbligatori.";
    } else if (ingredients.split(',').length < 2) {
      // Controllo extra: deve avere almeno 2 ingredienti separati da virgola
      newErrors.ingredients = "Inserisci almeno due ingredienti (separati da virgola).";
    }

    if (!steps) {
      newErrors.steps = "Le istruzioni di preparazione sono obbligatorie.";
    }

    return newErrors;
  };

  // Gestione dell'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Esegui la validazione
    const validationErrors = validate();
    
    // Se ci sono errori, aggiorna lo stato e ferma l'invio
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Se tutto è ok, pulisci gli errori e logga i dati (o inviali al backend)
    setErrors({});
    console.log({ title, ingredients, steps });
    alert("Ricetta aggiunta con successo!");
    
    // Resetta il form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Aggiungi Nuova Ricetta</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        {/* Campo Titolo */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Titolo Ricetta
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Es. Pasta al Pomodoro"
          />
          {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>}
        </div>

        {/* Campo Ingredienti */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredienti (separati da virgola)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 ${errors.ingredients ? 'border-red-500' : ''}`}
            placeholder="Es. Pasta, Pomodoro, Basilico, Sale"
          />
          {errors.ingredients && <p className="text-red-500 text-xs italic mt-1">{errors.ingredients}</p>}
        </div>

        {/* Campo Istruzioni */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
            Istruzioni di Preparazione
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 ${errors.steps ? 'border-red-500' : ''}`}
            placeholder="Scrivi qui i passaggi per preparare la ricetta..."
          />
          {errors.steps && <p className="text-red-500 text-xs italic mt-1">{errors.steps}</p>}
        </div>

        {/* Pulsante Invio */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
          >
            Aggiungi Ricetta
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;