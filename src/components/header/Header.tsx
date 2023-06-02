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
          <div className="itensMenu">
            <Link to="/"><a>Início</a></Link>
            <a>Sobre</a>
            <a>Transparência</a>
            <a>Notícias</a>
            <a>Contato</a>
            <button className='btn_doe'>Apoie</button>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header