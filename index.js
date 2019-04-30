const counter = document.querySelector(".counter");
const undo = document.querySelector(".undo");
const reset = document.querySelector(".reset");
let count;
let dailyRounds = 16;

const today = new Date().getDate().toString();

const lastTime = localStorage.getItem("today");

if (lastTime && today !== lastTime) handleReset();
localStorage.setItem("today", today);

count = localStorage.getItem("count") || 0;
counter.textContent = count;

counter.addEventListener("click", handleIncrement);
undo.addEventListener("click", handleUndo);
reset.addEventListener("click", handleReset);

function handleIncrement(e) {
  if (count >= dailyRounds) return;
  count++;
  localStorage.setItem("count", count);
  counter.textContent = count;
  e.preventDefault();
}

function handleUndo(e) {
  if (count <= 0) return;
  count--;
  localStorage.setItem("count", count);
  counter.textContent = count;
  e.preventDefault();
}

function handleReset(e) {
  count = 0;
  localStorage.setItem("count", count);
  counter.textContent = count;
  e.preventDefault();
}
