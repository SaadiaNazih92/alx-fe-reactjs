import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Funzione che scarica i dati (Fetcher)
const fetchPosts = async () => {
  // Usiamo axios come installato
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  // Configurazione di useQuery
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    isFetching, // Utile per vedere se sta aggiornando in background
    refetch     // Funzione per forzare l'aggiornamento manuale
  } = useQuery('posts', fetchPosts, {
    // I dati rimangono "freschi" per 5 secondi (non farà nuove richieste se cambi tab o componente)
    staleTime: 5000, 
    // La cache viene mantenuta in memoria per 10 minuti anche se non usata
    cacheTime: 10 * 60 * 1000, 
    // Opzionale: evita il refetch automatico quando torni sulla finestra
    refetchOnWindowFocus: false 
  });

  // Gestione stato di caricamento (prima volta)
  if (isLoading) return <div style={{color: 'orange'}}>Caricamento iniziale...</div>;

  // Gestione errori
  if (isError) return <div style={{color: 'red'}}>Errore: {error.message}</div>;

  return (
    <div className="posts-container">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '20px',
        borderBottom: '2px solid #eee',
        paddingBottom: '10px'
      }}>
        <h2>Lista dei Post</h2>
        
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
          style={{ 
            padding: '8px 16px', 
            cursor: 'pointer', 
            backgroundColor: isFetching ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px' 
          }}
        >
          {isFetching ? 'Aggiornamento in corso...' : 'Aggiorna Dati'}
        </button>
      </div>

      {/* Lista dei post */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.slice(0, 10).map(post => ( // Mostriamo solo i primi 10 per pulizia
          <li key={post.id} style={{ 
            marginBottom: '15px', 
            padding: '15px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#666' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
