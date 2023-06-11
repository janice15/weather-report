const state = {
    temp: 72,
    city: "Seattle"
};

const increaseTemp = () => {
    state.temp += 1;
    const CountContainer = document.getElementById('defaultTemp')
    CountContainer.textContent = `${state.temp}`;
};
const decreaseTemp = () => {
    state.temp -= 1;
    const CountContainer = document.getElementById('defaultTemp')
    CountContainer.textContent = `${state.temp}`;
};

const registerEventHandlers = () => {
    const increaseButton = document.getElementById('increaseTempButton');
    increaseButton.addEventListener("click", increaseTemp);
    const decreaseButton = document.getElementById('decreaseTempButton');
    decreaseButton.addEventListener("click", decreaseTemp);

resetSky();
const skySelect = document.getElementById('skySelect');
skySelect.addEventListener('change', updateSky);
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);

