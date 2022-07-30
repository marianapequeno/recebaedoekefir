import { Link } from 'react-router-dom'
import './menu.css'
import image from '../../../assets/logo.png'

function Menu() {
  function handleClick(){
    const menuList = document.querySelector(".menu-list-mobile");
    menuList.classList.toggle("inativo");
  }

  return (
    <nav className="menu">
      <ul className="menu-list-desktop">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/sobre">Sobre</Link></li>
        <li className="item-menu-img">
          <Link className="link" to="/">
            <img src={image} alt="Logotipo Comunidade Kefir" className="menu-img"/>
          </Link>
        </li>
        <li><Link className="link" to="/comunidade">Comunidade</Link></li>
        <li><Link className="link" to="/contato">Contato</Link></li>
      </ul>

      <div className="menu-mobile">
         <img src={image} alt="Logotipo Comunidade Kefir" className="link-mobile menu-img"/>
         <p className="paragraph">Doe Kefir</p>
         <div className="menu-btn-mobile" onClick={handleClick}>
          <span className="bar-mobile"></span>
          <span className="bar-mobile"></span>
          <span className="bar-mobile"></span>
         </div>
         <ul className="menu-list-mobile inativo">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/sobre">Sobre</Link></li>
          <li><Link className="link" to="/comunidade">Comunidade</Link></li>
          <li><Link className="link" to="/contato">Contato</Link></li>
         </ul>
      </div>
    </nav>
  )
}

export default Menu