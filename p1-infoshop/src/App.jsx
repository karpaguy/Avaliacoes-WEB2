import { useState } from 'react'
import './App.css'
import Forms from './components/Forms/Forms'
import Area from './components/Area/Area'

function App() {
  const sections = [
    {
      name: "Computadores",
      primaryColor: '#e06b69',
      items: []
    },
    {
      name: "Acessórios",
      primaryColor: '#cae069',
      items: []
    },
    {
      name: "Impressoras",
      primaryColor: '#95e069',
      items: []
    },
    {
      name: "Games",
      primaryColor: '#69b6e0',
      items: []
    },
    {
      name: "Gadgets",
      primaryColor: '#da69e0',
      items: []
    }
  ]
  const brands = ["HP", "Positivo", "Dell", "XingLing", "Asus"];
  const sectionNames = sections.map(section => section.name);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(prev => [...prev, item])
  }
  
  return (
    <>
      <Forms sectionArea={sectionNames} brandsArea={brands} onAddProduct={(item) => addItem(item)}/>
      {sections.map((area) => <Area
      key={area.name}
      name={area.name}
      primaryColor={area.primaryColor}
      items={items.filter(item => item.section === area.name)}
      />)}

    </>
  )
}

export default App
