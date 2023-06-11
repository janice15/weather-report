const state = {
    temp: 72,
    city: "Seattle"
};
const changeTempAndLandscape = () => {
    let temp = state.temp;
    let color = 'red';
    let landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜';
    if (temp > 80) {
        color = 'red';
        landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜';
    } else if (temp > 70) {
        color = 'orange';
        landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻';
    } else if (temp > 60) {
        color = 'yellow';
        landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾';
    } else if (temp > 50) {
        color = 'yellow-green';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️';
    } else {
        color = 'blue';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️';
    }

    const newLandscape = document.getElementById('landscape');
    newLandscape.textContent = landscape;
    const temperature = document.getElementById('defaultTemp');
    temperature.className = color;
    temperature.textContent = String(state.temp);
};
const increaseTemp = () => {
    state.temp += 1;
    changeTempAndLandscape();
};
const decreaseTemp = () => {
    state.temp -= 1;
    changeTempAndLandscape();

};

const registerEventHandlers = () => {
    changeTempAndLandscape();
    const increaseButton = document.getElementById('increaseTempButton');
    increaseButton.addEventListener("click", increaseTemp);
    const decreaseButton = document.getElementById('decreaseTempButton');
    decreaseButton.addEventListener("click", decreaseTemp);

    resetSky();
    const skySelect = document.getElementById('skySelect');
    skySelect.addEventListener('change', updateSky);
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);

