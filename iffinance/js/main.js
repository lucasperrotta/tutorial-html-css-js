function openModal(modalId) {
  const modal = document.querySelector(modalId);
  modal.style.display = "flex";
}

function closeModal(modalId) {
  const modal = document.querySelector(modalId);
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
    <div class="card" id="${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
      <header>
        <h2>${ticker}</h2>
        <h3>${bolsa}</h3>
      </header>
      <main>
        <p>
          <span class="red">▼</span><span class="bold">R$<span>${valor}</span></span>
        </p>
      </main>
      <footer>
        <p>Nº Ativos: <span class="bold">${ativos}</span></p>
        <p>R$ <span class="total">${total.toFixed(2)}</span></p>
      </footer>
      <div class="buttons">
        <button type="button" onclick="openEditCard(event)">Editar</button>
        <button type="button" onclick="deleteCard(event)">Excluir</button>
      </div>  
    </div>
  `;

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML += card;
  event.target.reset();
  closeModal("#add");
  // document.getElementById("cards").insertAdjacentHTML("beforeend", card); Caso fosse id não classe.
  // cardsContainer.insertAdjacentHTML("beforeend", card);
}

function editTicker(event) {
  event.preventDefault();

  const idcard = event.target.idcard.value;
  const ticker = event.target.editticker.value;
  const bolsa = event.target.editbolsa.value;
  const valor = event.target.editvalor.value;
  const ativos = event.target.editativos.value;

  const total = valor * ativos;

  const cardStockEdit = document.getElementById(idcard);

  const h2Ticker = cardStockEdit.querySelector("header h2");
  h2Ticker.innerText = ticker;

  const h3Bolsa = cardStockEdit.querySelector("header h3");
  h3Bolsa.innerText = bolsa;

  const spanValor = cardStockEdit.querySelector("main span span");
  spanValor.innerText = valor;

  const spanAtivos = cardStockEdit.querySelector("footer p span");
  spanAtivos.innerText = ativos;

  const spanTotal = cardStockEdit.querySelector("footer .total");
  spanTotal.innerText = total.toFixed(2);
  closeModal("#edit");
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

function deleteCard(event) {
  const buttonDelete = event.target;
  const cardStock = buttonDelete.closest(".card");
  cardStock.remove();
}

function openEditCard(event) {
  const buttonEdit = event.target;
  const cardStock = buttonEdit.closest(".card");

  const ticker = cardStock.querySelector("header h2").innerText;
  const inputEditTicker = document.getElementById("editticker");
  inputEditTicker.value = ticker;

  const idCard = cardStock.getAttribute("id");
  //cardStock.setAttribute("teste", "123");
  const inputIdCard = document.getElementById("idcard");
  inputIdCard.value = idCard;

  const bolsa = cardStock.querySelector("header h3").innerText;
  const selectEditBolsa = document.getElementById("editbolsa");
  selectEditBolsa.value = bolsa;

  const valor = cardStock.querySelector("main p span span").innerText;
  const inputEditValor = document.getElementById("editvalor");
  inputEditValor.value = valor;

  const ativos = cardStock.querySelector("footer span").innerText;
  const inputEditAtivos = document.getElementById("editativos");
  inputEditAtivos.value = ativos;

  openModal("#edit");
}
