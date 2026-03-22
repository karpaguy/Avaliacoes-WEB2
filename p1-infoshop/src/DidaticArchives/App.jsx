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
  const brands = ["HP", "Positivo", "Dell", "Xing Ling", "Asus"];
  const sectionNames = sections.map(section => section.name);

  // Por questões didática, manterei assim. Na prática, useStae(sections) dá no mesmo.
  const [sectionsData, setSectionsData] = useState(
    sections.map(section => ({...section}))
  )

  const addItem = (sectionName, item) => {
    const newSectionsData = sectionsData.map(section => {
      if (section.name === sectionName) {
        return {
          ...section,
          items: [...section.items, item]
        };
      }
      return section;
    });
  
    setSectionsData(newSectionsData);
  }

  return (
    <>
      <Forms sectionArea={sectionNames} brandsArea={brands} onAddProduct={(section, item) => addItem(section, item)}/>
      {sectionsData.map((section) => <Area
      key={section.name}
      primaryColor={section.primaryColor}
      items={section.items}
      />)}

    </>
  )
}

      // {areas.map((area) => <Area key={area.nome}
      // nome={area.nome}
      // corPrimaria={area.corPrimaria}
      // corSecundaria={area.corSecundaria}
      // professores={professores.filter(prof => prof.area == area.nome)}
      // />)}

export default App
