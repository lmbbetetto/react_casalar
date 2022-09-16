import { useState } from 'react'
import { Container } from "./homeStyles";

import Header from './components/header/Header'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>

      <Header />
      
      <Home />

      <Footer />


    </Container>
  )
}

export default App
