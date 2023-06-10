const state = {
    temp: 72,
};

const increaseTemp = () => {
    state.temp += 1;
    const CountContainer = document.querySelector("#defaultTemp")
    CountContainer.textContent = `${state.temp}`;
    
};
const decreaseTemp = () => {
    state.temp -= 1;
    const CountContainer = document.querySelector("#defaultTemp")
    CountContainer.textContent = `${state.temp}`;
};
function resetInput() {
document.getElementById("textInput").value = "Seattle";
}

document.getElementById("textInput").addEventListener("input", function() {
document.getElementById("output").innerHTML = this.value;
});




const registerEventHandlers = () => {
    const addButton = document.querySelector("#increaseTempButton");
    addButton.addEventListener("click", increaseTemp);
    const removeButton = document.querySelector("#decreaseTempButton");
    removeButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

