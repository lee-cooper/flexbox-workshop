const fwsTwoContainer = document.querySelector('.fws-2-container');
const fwsThreeContainer = document.querySelector('.fws-3-container');

document
  .querySelector('#justify-content-select')
  .addEventListener('change', function (e) {
    fwsTwoContainer.style.justifyContent = e.target.value;
  });

document
  .querySelector('#align-items-select')
  .addEventListener('change', function (e) {
    fwsThreeContainer.style.alignItems = e.target.value;
  });
