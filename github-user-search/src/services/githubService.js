import axios from 'axios';

// Funzione per chiamare l'API di GitHub
export const fetchUserData = async (username) => {
  // Se hai impostato la chiave API nel .env usa questa riga, altrimenti funzionerà comunque per poche richieste senza chiave
  // const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY; 
  
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
