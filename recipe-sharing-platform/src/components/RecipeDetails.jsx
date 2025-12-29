import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  // Recupera la ricetta dallo store. Nota: convertiamo recipeId in numero perché l'URL è stringa
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Componenti per Modifica e Cancellazione */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
