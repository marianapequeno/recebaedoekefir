import React from 'react';
import './comunidade.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Comunidade() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBuWY6bhoKldVwfOCN-PV6sYF9an1_6Z34"
  })

  return (
    <main className="main">
      <section className="section-map">
        <h2 className="title-2">Encontre um doador na sua região</h2>
        {/* {
          isLoaded ? (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272019.7847591658!2d-46.7078731913693!3d-23.73555255157942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1661545539641!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        ) : <></>
        } */}
      </section>

      <section className="section-form">
        <h2 className="title-1">Ou cadastre-se para doar ou receber</h2>
        <p className="paragraph">Caso não tenha achado alguém na sua região cadastre-se abaixo: </p>
       
        <form 
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfK8FbK372inolVMn4ktUI7TebDKpFbWwReu7vnTzP-8UdCSA/formResponse"
          name="contato"
          id="contato"
        >

          <label htmlFor="nome" className="label">Nome</label>
          <input 
            type="text" 
            name="entry.519160718" 
            id="nome" 
            className="input" 
            placeholder="Seu nome" 
            required
          />

          <label htmlFor="email" className="label">E-mail</label>
          <input 
            type="email" 
            name="entry.1335459650" 
            id="email" 
            className="input" 
            placeholder="Seu e-mail" 
            required
          />

          <label htmlFor="telefone" className="label">Telefone ou Num do WhatsApp</label>
          <input 
            type="tel" 
            name="entry.489025120" 
            id="telefone" 
            className="input"
            placeholder="Seu número de contato"  
          />

          <label htmlFor="estado" className="label">Estado</label>
          <input type="text" name="entry.753205699" id="estado" className="input" placeholder="Digite seu estado" required/>

          <label htmlFor="cidade" className="label">Cidade</label>
          <input type="text" name="entry.1089904732" id="cidade" className="input" placeholder="Digite o nome da sua cidade" required/>

          <label htmlFor="bairro" className="label">Bairro</label>
          <input type="text" name="entry.864223599" id="bairro" className="input" placeholder="Digite o nome do seu bairro" required/>

          <div className="radio">
            <input type="radio" name="entry.1963115737_sentinel" id="doar" value="doar" required/>
            <label htmlFor="doar">Quero doar</label>
          </div>
          <div className="radio">
            <input type="radio" name="entry.1963115737_sentinel" id="receber" value="receber" required/>
            <label htmlFor="receber">Quero receber</label>
          </div>

          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Comunidade