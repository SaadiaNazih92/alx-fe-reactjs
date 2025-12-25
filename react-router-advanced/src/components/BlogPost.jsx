import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Estrae l'id dall'URL
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Post ID: {id}</h2>
      <p>Questo è il contenuto dinamico per il post numero {id}.</p>
    </div>
  );
};

export default BlogPost;
