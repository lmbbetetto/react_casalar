import './styles.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { AnimatedHumburguerButton } from './animatedHamburguerButton'

function Header() {

  const [active, setActive] = useState(false)

  return (
    <>

      <header className='mobile'>
        <button
          className='hamburguer'
          onClick={() => {
            setActive(!active)
          }}
        >
          <AnimatedHumburguerButton active={active} />
        </button>
        <div className={active ? "activeSidenav" : "sidenav"}>
          <div className="container_mobile">
            <div className="mobile_1">
              <a>Início</a>
              <a>Sobre</a>
              <a>Transparência</a>
              <a>Contato</a>
            </div>
          </div>
        </div>
        <img src={logo} alt="Casa Abrigo" className="logo__casa" />
        <button className='btn_doe'>Apoie</button>
      </header>
    </>
  )
}

export default Header