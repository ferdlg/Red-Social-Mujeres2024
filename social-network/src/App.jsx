import { useState } from 'react'
import { Bar } from './components/bar/bar'
import { Page } from './pages/page';
import './assets/styles/components/post.css';  
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const logan = "https://media.discordapp.net/attachments/1292994825309782032/1293628760079204382/IMG-20241008-WA00181.jpg?ex=6708112a&is=6706bfaa&hm=e4d4c57a6a291de412cc0d98b3f375d521e2e003d3d96d7cf29e5c91fc8f5280&=&format=webp&width=526&height=376";
  const slogan = "Social Media";
  const post = useSelector((state) => state.post);
  return (
    <>
      <Page></Page>
    
      <Bar
      logo={logan}
      slogan={slogan}
      ></Bar>
    </>
  );
}

export default App;

