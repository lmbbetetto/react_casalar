import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import { Noticias } from './components/noticias/noticia/index';
import { About } from './components/about/About';
import { NotIndex } from './components/noticias/noticiasIndex/notIndex';
import { Transparencia } from "./components/transparencia";
import { Contact } from "./components/contact";
import { Apoie } from "./components/apoie";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticia" element={<Noticias />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/noticias" element={<NotIndex />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/apoie" element={<Apoie />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
