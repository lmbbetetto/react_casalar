import './styles.css'
import LOGO from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

export function Header() {

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
                <Link to="/apoie"><button className='btn_doe'><FaHeart size={15}/> Apoie</button></Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  )
}