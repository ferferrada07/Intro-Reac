import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header tittle="Adopta un perrito"></Header>
        <div className= "containerGallery">
          <Card img ="./public/img/img1.jpg" alt="Bartolo" nombre="Bartolo" detalle="Lleno de energía y listo para jugar.¡Dale a Bartolo el hogar amoroso que se merece!." boton="Ver Mas"/>
          <Card img ="./public/img/img2.jpg" alt="Messi" nombre="Messi" detalle="Es juguetón, amigable y se leva bien con niños y otros animales.¡Haz de Messi parte de tu familia hoy mismo!." boton="Ver Mas"/>
          <Card img ="./public/img/img3.jpg" alt="Gohan" nombre="Gohan" detalle="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional." boton="Ver Mas"/>
          <Card img ="./public/img/img4.jpg" alt="Princesa" nombre="Princesa" detalle="Es una comapañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz." boton="Ver Mas"/>
        </div>
        <Footer></Footer>
      </div>
      
      
    </>
  )
}

export default App
