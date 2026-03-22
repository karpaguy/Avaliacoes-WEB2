import { useState } from 'react'
import './App.css'
import Forms from './components/Forms/Forms'
import Area from './components/Area/Area'
import Button from './components/Button/Button'

function App() {
  const sections = [
    {
      name: "Computadores",
      primaryColor: 'section-computers',
      items: []
    },
    {
      name: "Acessórios",
      primaryColor: 'section-accessories',
      items: []
    },
    {
      name: "Impressoras",
      primaryColor: 'section-printers',
      items: []
    },
    {
      name: "Games",
      primaryColor: 'section-games',
      items: []
    },
    {
      name: "Gadgets",
      primaryColor: 'section-gadgets',
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
    <div className='main-content'>
      <h1 className='title'>PRODUTOS DE INFORMÁTICA</h1>

      <Forms sectionArea={sectionNames} brandsArea={brands} onAddProduct={(item) => addItem(item)}/>


      <div className="separation-bar"/>

      <section className="items-area">
        <div className="navbar">
          <Button key="Todos">Todos</Button>
          {sections.map((area) => <Button key={area.name} variant="off">{area.name}</Button>)}
        </div>
        <div className="items">
          {sections.map((area) =>
            <Area
            key={area.name}
            name={area.name}
            primaryColor={area.primaryColor}
            items={items.filter(item => item.section === area.name)}
            />)}
        </div>
      </section>
    </div>
  )
}

export default App;
