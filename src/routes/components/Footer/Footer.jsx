import './footer.css'
import Menu from '../Menu/Menu'
import image from '../../../assets/logo.png';
import instagram from '../../../assets/instagram-icon.svg';
import facebook from '../../../assets/facebook-icon.svg';
import linkedin from '../../../assets/linkedin-icon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Menu/>
        <img src={image} alt="Logotipo Comunidade Kefir" />
        <div className="social-media-container">
          <p>Siga-nos:</p>
          <ul className="social-media-icons">
            <li><a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Link do nosso perfil no instagram" /></a></li>
            <li><a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Link do nosso perfil no Facebook" /></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="Link do nosso perfil no Linkedin" /></a></li>
          </ul>
        </div>
      </div>
      <p className="paragraph">Site desenvolvido por <a href="https://github.com/marianapequeno" target="_blank">Mariana</a></p>
    </footer>
  )
}

export default Footer