import { useState } from 'react'
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Header from './components/header/Header'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import { Noticias } from './components/noticias/noticia/index';
import { About } from './components/about/About';
import { NotIndex } from './components/noticias/noticiasIndex/notIndex';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticia" element={<Noticias />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/noticias" element={<NotIndex />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
