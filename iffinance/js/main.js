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
    <div class="card" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
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
      <div class="buttons">
        <button type="button" onclick="">Editar</button>
        <button type="button" onclick="">Excluir</button>
      </div>  
    </div>
  `;

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML += card;
  closeModal();
  // document.getElementById("cards").insertAdjacentHTML("beforeend", card); Caso fosse id não classe.
  // cardsContainer.insertAdjacentHTML("beforeend", card);
}
function showButtons(event) {
  const cardStock = event.target;
  const buttons = cardStock.querySelector(".buttons");
  buttons.style.display = "flex";
}

function hideButtons(event) {
  const cardStock = event.target;
  const buttons = cardStock.querySelector(".buttons");
  buttons.style.display = "none";
}
