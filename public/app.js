const $ = (s) => document.querySelector(s);

const avatar = $("#avatarModel");
const head = $(".head");
const torso = $(".torso");
const arms = document.querySelectorAll(".arm");
const legs = document.querySelectorAll(".leg");

function loadSettings() {
  const saved = JSON.parse(localStorage.getItem("brickhill-v1-settings") || "{}");
  const name = saved.name || "Sebs";
  const colors = saved.colors || {};

  $("#username").textContent = name;
  $("#usernameTop").textContent = name;
  $("#usernameProfile").textContent = name;

  if (colors.head) head.style.background = colors.head;
  if (colors.torso) torso.style.background = colors.torso;
  if (colors.arms) arms.forEach(a => a.style.background = colors.arms);
  if (colors.legs) legs.forEach(l => l.style.background = colors.legs);

  if (colors.head) $("#headColor").value = colors.head;
  if (colors.torso) $("#torsoColor").value = colors.torso;
  if (colors.arms) $("#armColor").value = colors.arms;
  if (colors.legs) $("#legColor").value = colors.legs;
}

function saveSettings() {
  const current = JSON.parse(localStorage.getItem("brickhill-v1-settings") || "{}");
  current.colors = {
    head: $("#headColor").value,
    torso: $("#torsoColor").value,
    arms: $("#armColor").value,
    legs: $("#legColor").value
  };
  localStorage.setItem("brickhill-v1-settings", JSON.stringify(current));
}

$("#headColor").addEventListener("input", e => {
  head.style.background = e.target.value; saveSettings();
});
$("#torsoColor").addEventListener("input", e => {
  torso.style.background = e.target.value; saveSettings();
});
$("#armColor").addEventListener("input", e => {
  arms.forEach(a => a.style.background = e.target.value); saveSettings();
});
$("#legColor").addEventListener("input", e => {
  legs.forEach(l => l.style.background = e.target.value); saveSettings();
});

$("#editName").addEventListener("click", () => {
  const name = prompt("Choose your username:", $("#username").textContent);
  if (!name || !name.trim()) return;
  const clean = name.trim().slice(0, 20);
  const current = JSON.parse(localStorage.getItem("brickhill-v1-settings") || "{}");
  current.name = clean;
  localStorage.setItem("brickhill-v1-settings", JSON.stringify(current));
  loadSettings();
});

$("#logout").addEventListener("click", () => {
  alert("Logout is a placeholder in V1. Real authentication comes in V2.");
});

document.querySelectorAll(".shop-item").forEach(item => {
  item.addEventListener("click", () => {
    $("#shopMessage").textContent = `${item.dataset.item} selected — inventory system coming in V2.`;
  });
});

async function loadGames() {
  try {
    const res = await fetch("/api/games");
    const games = await res.json();
    $("#gamesList").innerHTML = games.map(game => `
      <article class="game-card">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <small>${game.players} playing</small>
        <button class="play-btn" data-game="${game.id}">Play</button>
      </article>
    `).join("");

    document.querySelectorAll(".play-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        alert(`"${btn.dataset.game}" is ready as the next step. We will connect the actual game client next.`);
      });
    });
  } catch {
    $("#gamesList").innerHTML = "<p>Could not load games.</p>";
  }
}

loadSettings();
loadGames();