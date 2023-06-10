const state = {
    temp: 72,
    city: "Seattle"
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



const registerEventHandlers = () => {
    const addButton = document.querySelector("#increaseTempButton");
    addButton.addEventListener("click", increaseTemp);
    const removeButton = document.querySelector("#decreaseTempButton");
    removeButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

