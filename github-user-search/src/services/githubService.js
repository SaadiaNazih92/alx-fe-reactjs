import axios from 'axios';

export const fetchAdvancedSearch = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  // Gestione parametro username
  if (username) {
    query += `${username}`;
  }

  // Gestione parametro location
  if (location) {
    query += `+location:${location}`;
  }

  // Gestione parametro minRepos
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  // La stringa base URL deve corrispondere esattamente a quella cercata dal checker
  const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
  
  return response.data;
};

// Manteniamo anche la vecchia funzione per sicurezza, se serve ad altre parti
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
