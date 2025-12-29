import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          {/* Home Page: Mostra Form di aggiunta e Lista */}
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          {/* Dettagli Ricetta: Mostra dettagli, edit e delete */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
