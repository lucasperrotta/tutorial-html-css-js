function openModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function addTicker(event) {
  event.preventDefault();
  // questão de prova
  /*const formData = new FormData(event.target);
  const ticker = formData.get("ticker");
  const bolsa = formData.get("bolsa");
  const valor = formData.get("valor");
  const ativos = formData.get("ativos");

  console.log({ ticker, bolsa, valor, ativos });*/
  const ticker = event.target.ticker.value;
  const bolsa = event.target.bolsa.value;
  const valor = event.target.valor.value;
  const ativos = event.target.ativos.value;

  const total = valor * ativos;

  const card = `
    <div class="card">
      <header>
        <h2>${ticker}</h2>
        <h3>${bolsa}</h3>
      </header>
      <main>
        <p>
          <span class="red">▼</span><span class="bold">R$${valor}</span>
        </p>
      </main>
      <footer>
        <p>Nº Ativos: <span class="bold">${ativos}</span></p>
        <p>R$ ${total.toFixed(2)}</p>
      </footer>
    </div>
  `;

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML += card;
  closeModal();
  // document.getElementById("cards").insertAdjacentHTML("beforeend", card); Caso fosse id não classe.
  // cardsContainer.insertAdjacentHTML("beforeend", card);
}
