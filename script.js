const AD_LINK = "https://www.effectivegatecpm.com/zpub16xa6y?key=25ff0db6aed5e2bad0964546a02919e6";

let allModels = [];
let currentCategory = "all";

fetch("models.json")
  .then(res => res.json())
  .then(data => {
    allModels = data;
    renderModels(data);
  });

function renderModels(models) {
  const container = document.getElementById("models");
  container.innerHTML = "";

  models.forEach(model => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${model.image}">
      <h3>${model.name}</h3>
      <span>${model.category.toUpperCase()}</span>
      <button>Unlock Model</button>
    `;

    card.querySelector("button").onclick = () => {
      window.location.href = AD_LINK;
    };

    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allModels.filter(m =>
    m.name.toLowerCase().includes(value) &&
    (currentCategory === "all" || m.category === currentCategory)
  );
  renderModels(filtered);
});

function filterCategory(cat) {
  currentCategory = cat;
  const filtered = allModels.filter(m =>
    cat === "all" || m.category === cat
  );
  renderModels(filtered);
}

/* Music */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  music.muted = false;
  music.volume = 0.4;
  music.play();
  btn.innerText = "🎵 Music Playing";
};
