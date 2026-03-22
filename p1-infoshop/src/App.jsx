import { useState } from 'react'
import './App.css'
import Forms from './components/Forms/Forms'

function App() {
  const sections = [
    {
      name: "Computadores",
      color: "blue"
    },
    {
      name: "Acessórios",
      color: "blue"
    },
    {
      name: "Impressoras",
      color: "blue"
    },
    {
      name: "Games",
      color: "blue"
    },
    {
      name: "Gadgets",
      color: "blue"
    }
  ]
  const brands = ["HP", "Positivo", "Dell", "Xing Ling", "Asus"];
  const sectionNames = sections.map(section => section.name);

  return (
    <>
      <Forms sectionArea={sectionNames} brandsArea={brands}/>
    </>
  )
}

export default App
