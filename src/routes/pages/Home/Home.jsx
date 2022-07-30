import './home.css';
import image2 from '../../../assets/img2.jpg';

function Home() {
  return (
    <main className="main">
      <section className="first_section">
        <div className="container_img2">
          <img className="img2" src={image2} alt="Saúde intestinal"/>
        </div>
        <div className="container_text_section1">
          <h2>Consuma Kefir e ganhe saúde</h2>
          <p className="text1">
            70% do nosso sistema imunológico está no intestino, que é chamado pelos cientistas de segundo cérebro. 
          </p>
          <p className="text1">
            Vindo lá das montanhas do Cáucaso e cercado de boas histórias, o kefir contém uma grande variedade de microrganismos vivos e ativos "do bem", que regulam a flora intestinal.
          </p>
          <p className="text1">
            A bebida milenar fortalece o sistema imunológico e oferece uma série de outros benefícios,
            como melhor digestão e eliminação de toxinas. Com consistência semelhante ao iogurte, é considerada o probiótico mais rico e efetivo do mundo.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home