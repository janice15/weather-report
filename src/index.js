
function resetInput() {
  document.getElementById("textInput").value = "Seattle";
}

document.getElementById("textInput").addEventListener("input", function() {
  document.getElementById("output").innerHTML = this.value;
});



const minusTemp = document.querySelector('.minus')
const plusTemp = document.querySelector('.plus');

plusTemp.addEventListener('click',() => document.getElementById("number").textContent++);

minusTemp.addEventListener('click',() => document.getElementById("number").textContent--);


document.addEventListener("DOMContentLoaded", registerEventHandlers);

