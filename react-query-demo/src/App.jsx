import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';

// Crea il client che gestirà la cache
const queryClient = new QueryClient();

function App() {
  return (
    // Il Provider rende disponibile React Query ai componenti figli
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
