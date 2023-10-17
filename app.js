/** @format */
// changing html content
// document.getElementById("demo").innerHTML = "Hello Javascript";

// changing or adding styles to html content
// document.getElementById("demo").style.fontSize = "12px"
const Btn = document.getElementById("changeBtn");

// functions
function ChangeContent() {
  document.getElementById("demo").style.display = "none";
}

Btn.onclick = () => ChangeContent();
