function addProductBox(id, name, price, imageUrl) {
  var productHTML = `
    <div class="box">
      <a id="${id}" href="pages/produkt.html" onclick="storeItemSelected(this.id)">
        <div id="${id}Img">
          <img src="${imageUrl}">
        </div>
      </a>
      <p>${name}</p>
      <p><b>${price} zł.</b></p>
      <div class="razem">
        <input type="text" class="price-input" placeholder="TWOJA KWOTA">
        <button>Podbijam</button>
      </div>
    </div>
  `;
  document.getElementById("someElementId").innerHTML += productHTML;
}


.panel {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 10px;
  display: none;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>

<div style="position: relative;">
  <img src="https://example.com/image.jpg" id="myImage" alt="Zdjęcie">
  <div id="panelContainer"></div>
</div>

<script>
function showPanel() {
  var panel = document.getElementById('panel');
  if (!panel) {
    // Tworzenie nowego panelu
    panel = document.createElement('div');
    panel.id = 'panel';
    panel.className = 'panel';

    // Dodawanie zawartości panelu
    panel.innerHTML = `
      <h3>Tytuł panelu</h3>
      <p>Treść panelu Lorem ipsum dolor sit amet.</p>
      <span class="close-btn">&times;</span>
    `;

    // Dodawanie panelu do kontenera
    var panelContainer = document.getElementById('panelContainer');
    panelContainer.appendChild(panel);

    // Obsługa zdarzenia dla przycisku zamknięcia
    var closeBtn = panel.querySelector('.close-btn');
    closeBtn.addEventListener('click', hidePanel);
  }

  // Wyświetlanie panelu
  panel.style.display = 'block';
}

function hidePanel() {
  var panel = document.getElementById('panel');
  if (panel) {
    // Ukrywanie panelu
    panel.style.display = 'none';
  }
}

// Pobieranie elementu zdjęcia
var image = document.getElementById('myImage');

// Dodawanie nasłuchiwacza zdarzeń dla kliknięcia w zdjęcie
image.addEventListener('click', showPanel);