import './sobre.css'

function Sobre() {
  return (
    <main className="main">
      <section className="sobre-first_section">
        <h2>O que é Kefir?</h2>
        <p className="text1">
          Kefir, kéfir, quefir ou kephir é uma bebida fermentada milenar, originária das montanhas do Cáucaso, área entre a Europa Oriental e a Ásia Ocidental.
        </p>
        <p className="text1">
          Os “grãos de kefir” são uma colônia formada por bactérias (lactobacilos e bifidobactérias) que auxilia no funcionamento da flora intestinal e pode ser um aliado para pessoas com intolerâncias alimentares.
        </p>
        <p className="text1">
          Existem dois tipos: o chamado kefir de leite, preparado com leite integral, também muito usado na produção de iogurtes e queijos. E o chamado kefir de água, este deve ser prepardo usando água filtrada ou mineral e açucar mascavo. Os grãos de kefir multiplicam-se conforme vão sendo cultivados, quanto maior a temperatura mais ativos ficam e por consequência aumentam em quantidade, este é um dos motivos para doação.
        </p>
      </section>

      <section className="sobre-first_section">
        <h2>Benefícios</h2>
        <ul className="list">
          <li className="item">Prevenção e tratamento de diarreia;</li>
          <li className="item">Alívio da síndrome do intestino irritável;</li>
          <li className="item">Redução de colesterol;</li>
          <li className="item">Prevenção e tratamento de infecções vaginais, gastrointestinais ou do trato urinário;</li>
          <li className="item">Potencial efeito anti-inflamatório.</li>
        </ul>
      </section>

      <section className="sobre-first_section">
        <h2>Como cuidar do seu Kefir</h2>
        <p className="text1">
          Após receber sua cultura doada, caso tenha recebido sua muda com água ou leite, descarte-os. 
        </p>
        <p className="text1">
        Você precisará de um recipiente de vidro, uma peneira de plástico ou silicone e uma colher de aço inox preferencialmente (Não pode ser outro metal, somente aço inoxidável), caso não tenha você pode usar colher de madeira, plástico ou silicone. Para o cultivo você precisará também de leite e no caso da cultura de água, açucar mascavo e água filtrada, mineral ou fervida.
        </p>
      </section>
      <section className="sobre-first_section">
      <h2>Modo de preparo: </h2>
        <ul className="list">
          <li className="item">Faça a esterelização dos utencílios com, jogando água fervente;</li>
          <li className="item">Espere esfriar (importante pois a alta temperatura pode matar a cultura);</li>
          <li className="item">Coloque os grãos na peneira, depois adicione a água ou leite no pote de vidro, a medida é para cada 1 litro 2 colheres de sopa de grãos;</li>
          <li className="item">Cubra o recipiente com um pano e faça a vedação com um elástico, pode ser aquele de dinheiro;</li>
          <li className="item">Deixe descansando em local arejado mas longe da luz solar;</li>
          <li>Após 24 horas, penere a água/leite e guarde para o consumo e repita o processo.</li>
        </ul>
        <p className="text1">IMPORTENTE: Descarte as 2 primeiras águas/leites após a doação, consuma o líquido somente após a 3ª troca.</p>
      </section>
    </main>
  )
}

export default Sobre