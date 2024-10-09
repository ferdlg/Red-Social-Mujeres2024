import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const post = useSelector((state) => state.post);
  return (
    <>
    <h1>Hola</h1>
    </>
  )
}

export default App
