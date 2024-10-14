import { useState } from 'react'; 
import './assets/styles/post.css';  
import Post from './components/post/post'; 
import './App.css'
import { Bar } from './components/bar/bar'

function App() {

  const examplePost = {
    title: 'Título de la Publicación',
    content: 'Contenido de la publicación aquí...',
    likes: 42,
    shares: 10,
  };

  const logan = "https://media.discordapp.net/attachments/1292994825309782032/1293628760079204382/IMG-20241008-WA00181.jpg?ex=6708112a&is=6706bfaa&hm=e4d4c57a6a291de412cc0d98b3f375d521e2e003d3d96d7cf29e5c91fc8f5280&=&format=webp&width=526&height=376";
  const slogan = "Social Media";
  return (
    <>
      <Post post={examplePost} /> 
    
      <Bar
      logo={logan}
      slogan={slogan}
      ></Bar>
    </>
  );
}

export default App;

