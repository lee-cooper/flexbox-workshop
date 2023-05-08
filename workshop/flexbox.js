const fwsTwoContainer = document.querySelector('.fws-2-container');
const fwsThreeContainer = document.querySelector('.fws-3-container');
const fwsFourContainer = document.querySelector('.fws-4-container');

let justifyDisplay = document.querySelector('#justify-display');
let alignDisplay = document.querySelector('#align-display');
let flexDirectionDisplay = document.querySelector('#flex-direction-display');

document
  .querySelector('#justify-content-select')
  .addEventListener('change', function (e) {
    justifyDisplay.innerHTML = e.target.value;
    fwsTwoContainer.style.justifyContent = e.target.value;
  });

document
  .querySelector('#align-items-select')
  .addEventListener('change', function (e) {
    alignDisplay.innerHTML = e.target.value;
    fwsThreeContainer.style.alignItems = e.target.value;
  });

document
  .querySelector('#flex-direction-select')
  .addEventListener('change', function (e) {
    flexDirectionDisplay.innerHTML = e.target.value;
    fwsFourContainer.style.flexDirection = e.target.value;
  });
