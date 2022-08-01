import { Link } from 'react-router-dom'
import './menu.css'
import image from '../../../assets/logo.png'

function Menu() {
  function handleClick(event){
    const menuList = document.querySelector(".menu-list-mobile");
    const barMobile1 = document.querySelector(".bar-mobile-1");
    const barMobile2 = document.querySelector(".bar-mobile-2");
    const barMobile3 = document.querySelector(".bar-mobile-3");
   
    menuList.classList.toggle("inativo");
    menuList.classList.toggle("active");
    barMobile1.classList.toggle("active");
    barMobile3.classList.toggle("active");

    if(!menuList.classList.contains("inativo")){
      barMobile2.style.display = "none";
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
      barMobile2.style.display = "block";
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
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
          <span className="bar-mobile bar-mobile-1"></span>
          <span className="bar-mobile bar-mobile-2"></span>
          <span className="bar-mobile bar-mobile-3"></span>
         </div>
         <ul className="menu-list-mobile inativo">
          <li><Link className="link mobile-link" to="/">Home</Link></li>
          <li><Link className="link mobile-link" to="/sobre">Sobre</Link></li>
          <li><Link className="link mobile-link" to="/comunidade">Comunidade</Link></li>
          <li><Link className="link mobile-link" to="/contato">Contato</Link></li>
         </ul>
      </div>
    </nav>
  )
}

export default Menu