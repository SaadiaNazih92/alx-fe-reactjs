import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    // Dopo aver cancellato, torna alla home o alla lista
    navigate('/'); 
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
