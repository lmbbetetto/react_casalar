import './styles.css'
import LOGO from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { AnimatedHumburguerButton } from './animatedHamburguerButton'
import { useState } from 'react'

export function Header() {
  const [active, setActive] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='containerMenu'>
        <header className='menu'>
          <div>
            <Link to="/"><img src={LOGO} alt="Logo Casa Lar" className='logo__casa' /></Link>
          </div>
          <div>
            <nav className="itensMenu">
              <ul>
                <Link to="/"><li>Início</li></Link>
                <Link to="/sobre"><li>Sobre</li></Link>
                <Link to="/transparencia"><li>Transparência</li></Link>
                <Link to="/noticias"><li>Notícias</li></Link>
                <Link to="/contato"><li>Contato</li></Link>
                <Link to="/apoie"><button className='btn_doe'><FaHeart size={15} /> Apoie</button></Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <div className='main_mobile'>
        <header className='mobile_mobile'>
          <div className='hamburguer-container'>
            <button
              className='hamburguer'
              onClick={() => {
                setActive(!active)
              }}
            >
              <AnimatedHumburguerButton active={active} />
            </button>
          </div>
          <div className={active ? "activeSidenav" : "sidenav"}>
            <div className="container_mobile container-header">
              <div className="mobile_1" onClick={scrollToTop}>
                <Link to="/"><li>Início</li></Link>
                <Link to="/sobre"><li>Sobre</li></Link>
                <Link to="/transparencia"><li>Transparência</li></Link>
                <Link to="/noticias"><li>Notícias</li></Link>
                <Link to="/contato">Contato</Link>
                <Link to="/apoie"><button className='btn_doe'><FaHeart size={15} /> Apoie</button></Link>
              </div>
            </div>
          </div>
          <div>
            <Link to="/"><img src={LOGO} alt="Logo Casa Lar" className='logo__casa' /></Link>
          </div>
        </header>
      </div>
    </>
  )
}