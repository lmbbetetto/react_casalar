import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Container } from "./homeStyles";

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Fotovoltaico } from "./components/noticias/noticia/fotovoltaico/index";
import { Vaolivre } from "./components/noticias/noticia/vaolivre/index";
import { About } from "./components/about/About";
import { NotIndex } from "./components/noticias/noticiasIndex/notIndex";
import { Transparencia } from "./components/transparencia";
import { Contact } from "./components/contact";
import { Apoie } from "./components/apoie";
import { DocAssociacao } from "./components/transparencia/doc-associacao/doc-associacao";
import { DocPrestacaoContas } from "./components/transparencia/prestacao-contas/prestacao-contas";
import { Doc2022 } from "./components/transparencia/prestacao-contas/2022/2022";
import { Doc2023 } from "./components/transparencia/prestacao-contas/2023/2023";
import { Doc2024 } from "./components/transparencia/prestacao-contas/2024/2024";
import { Doc2025 } from "./components/transparencia/prestacao-contas/2025/2025";
import { Servicos } from "./components/about/servicos/servicos";
import { Colaboradores } from "./components/about/colaboradores/colaboradores";
import { Diretoria } from "./components/about/diretoria/diretoria";
import { Fotos } from "./components/about/fotos/fotos";
import { Automovel } from "./components/noticias/noticia/carro";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/apoie" element={<Apoie />} />
        <Route path="/galeria-fotos" element={<Fotos />} />

        {/* Noticias */}
        <Route path="/noticias" element={<NotIndex />} />
        <Route path="/noticias/vaolivre" element={<Vaolivre />} />
        <Route path="/noticias/fotovoltaico" element={<Fotovoltaico />} />
        <Route path="/noticias/aquisicao-automovel" element={<Automovel />} />

        {/* Transparência */}
        <Route path="/transparencia" element={<Transparencia />} />
        <Route
          path="/transparencia/documentos-associacao"
          element={<DocAssociacao />}
        />
        <Route
          path="/transparencia/prestacao-contas"
          element={<DocPrestacaoContas />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2022"
          element={<Doc2022 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2023"
          element={<Doc2023 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2024"
          element={<Doc2024 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2025"
          element={<Doc2025 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2025/colaboradores"
          element={<Colaboradores />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2025/diretoria"
          element={<Diretoria />}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </Container>
  );
}

export default App;
