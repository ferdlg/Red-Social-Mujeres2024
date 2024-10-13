import { useState } from 'react'; 
import './assets/styles/post.css';  
import Post from './components/post'; 

function App() {
  const [count, setCount] = useState(0);

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

