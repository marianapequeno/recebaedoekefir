import React from 'react';
import './contato.css';

function Contato() {

  function handleChange(event){
    const mensagem = document.querySelector("#mensagem");
    if(!event.target.checkValidity()){
      mensagem.setCustomValidity("Digite um texto válido para a mensagem!")
    }
  }

  return (
    <main className="main">
      <section className="section_contato">
        <h2 className="title_contato">Fale conosco</h2>
        <p className="text_contato">Preencha o formulário ao lado e entraremos em contato o mais breve possível.</p>
      </section>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSeerfOmZ-cpvId0rA-gb6seOd_ddNM53Sxh9kFdQWzD6ioAxQ/formResponse"
      name="contato"
      id="contato"
      >
        <label htmlFor="nome" className="label">Nome</label>
        <input 
          type="text" 
          name="entry.1350659494" 
          id="nome" 
          className="input" 
          placeholder="Seu nome" 
          required
        />

        <label htmlFor="email" className="label">E-mail</label>
        <input 
          type="email" 
          name="entry.2059690547" 
          id="email" 
          className="input" 
          placeholder="Seu e-mail" 
          required
        />

        <label htmlFor="mensagem" className="label">Mensagem</label>
        <textarea 
          name="entry.1785551697" 
          id="mensagem" 
          rows="10" 
          className="input" 
          placeholder="Digite sua mensagem aqui" 
          minLength="8" 
          onChange={handleChange}
        >
        </textarea>

        <button type="submit" className="btn">Enviar</button>
      </form>
    </main>
  )
}

export default Contato