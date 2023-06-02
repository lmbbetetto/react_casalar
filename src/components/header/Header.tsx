import './styles.css'
import LOGO from '../../assets/logo.png'

function Header() {

  return (
    <>
      <div className='containerMenu'>
        <header className='menu'>
          <div>
            <img src={LOGO} alt="Logo Casa Lar" className='logo__casa' />
          </div>
          <div className="itensMenu">
            <a>Início</a>
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