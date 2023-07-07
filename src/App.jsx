import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [sobrenome, setSobrenome] = useState('Oliveira')

  //let sobrenome = 'Oliveira'
  
  return (
    <>
      <h1>Alexandre</h1>
      <div>{sobrenome}</div>
      <button type="button" onClick={() => setSobrenome(sobrenome.toUpperCase()) }>Morfar!</button>
    </>
  )
}

export default App
