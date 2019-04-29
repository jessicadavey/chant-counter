const counter = document.querySelector(".counter");
const undo = document.querySelector(".undo");
const reset = document.querySelector(".reset");

let count = localStorage.getItem("count") || 0;
counter.textContent = count;

counter.addEventListener("click", handleIncrement);
undo.addEventListener("click", handleUndo);
reset.addEventListener("click", handleReset);

function handleIncrement() {
  if (count >= 16) return;
  count++;
  localStorage.setItem("count", count);
  counter.textContent = count;
}

function handleUndo() {
  if (count <= 0) return;
  count--;
  localStorage.setItem("count", count);
  counter.textContent = count;
}

function handleReset() {
  count = 0;
  localStorage.setItem("count", count);
  counter.textContent = count;
}
