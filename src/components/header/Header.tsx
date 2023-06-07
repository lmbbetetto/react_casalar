import './styles.css'
import LOGO from '../../assets/logo.png'

import { Link } from 'react-router-dom'

function Header() {

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
                <li>Transparência</li>
                <Link to="/noticias"><li>Notícias</li></Link>
                <li>Contato</li>
                <button className='btn_doe'>Apoie</button>

              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header