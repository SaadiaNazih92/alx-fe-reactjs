import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // <--- Importa il nuovo componente

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* <--- Nuova rotta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;