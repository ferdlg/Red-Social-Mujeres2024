import { useState } from 'react'; 
import './assets/styles/post.css';  
import Post from './components/post/post'; 

function App() {

  const examplePost = {
    title: 'Título de la Publicación',
    content: 'Contenido de la publicación aquí...',
    likes: 42,
    shares: 10,
  };

  return (
    <>
      <Post post={examplePost} /> 
    </>
  );
}

export default App;

