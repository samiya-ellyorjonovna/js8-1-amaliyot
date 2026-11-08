const raqam = document.querySelector('#raqam');
const tugma = document.querySelector('#plus-tugma');

let son = 0;

tugma.addEventListener('click', () => {
    son++;
    raqam.innerHTML = son;
});