const FORM_URL = "https://forms.gle/REPLACE_WITH_YOUR_FORM_ID";
const baseSeed = 987654321;

const CARDS = [
  {
    image: "https://via.placeholder.com/600x200?text=Echo+Image",
    title: "Echo — Cave resonance",
    prompt: "What voices are echoed in AI systems? Whose sounds are amplified, and whose are lost?",
    anchors: [
      "Whose voices/data are under-represented?",
      "What would ‘amplification with accountability’ look like?",
      "What trade-off would you accept to improve inclusion?"
    ]
  }
];

function mulberry32(seed) {
  let t = seed >>> 0;
  return function() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ t >>> 15, 1 | t);
    r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
    return ((r ^ r >>> 14) >>> 0) / 4294967296;
  };
}

function shuffle(array, seed) {
  const rnd = mulberry32(seed);
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const params = new URLSearchParams(location.search);
const tableNum = parseInt(params.get("table") || "0", 10);
const seed = baseSeed + (Number.isFinite(tableNum) ? tableNum : 0);
let deck = shuffle(CARDS, seed);
let index = 0;

const nextBtn = document.getElementById("nextBtn");
const twoBtn = document.getElementById("twoBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const submitBtn = document.getElementById("submitBtn");
const tablePill = document.getElementById("tablePill");
const remainingPill = document.getElementById("remainingPill");
const singleCardDiv = document.getElementById("singleCard");
const twoCardsDiv = document.getElementById("twoCards");
const leftCardDiv = document.getElementById("leftCard");
const rightCardDiv = document.getElementById("rightCard");

tablePill.textContent = `Table: ${Number.isFinite(tableNum) ? tableNum : 0}`;
updateRemaining();

function renderCard(el, card) {
  const imageHTML = card.image ? `${card.image}` : '';
  el.innerHTML = `${imageHTML}<div class="title">${card.title}</div><div class="prompt">${card.prompt}</div><div class="anchors"><strong>Anchors:</strong><ul>${card.anchors.map(a => `<li>${a}</li>`).join("")}</ul></div>`;
}

function drawOne() {
  if (index >= deck.length) {
    singleCardDiv.style.display = "block";
    twoCardsDiv.style.display = "none";
    singleCardDiv.innerHTML = "<strong>Deck exhausted.</strong> Ask your facilitator for a refill link.";
    nextBtn.disabled = true; twoBtn.disabled = true;
    updateRemaining();
    return;
