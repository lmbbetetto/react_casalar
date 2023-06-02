import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";

import Header from './components/header/Header'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import { Noticias } from './components/noticias/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
