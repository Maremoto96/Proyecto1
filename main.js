import './style.css';

let res = document.querySelector('#result');
let button = document.querySelector('#exercise');

button.addEventListener('click', () => test());

function test() {
  res.innerHTML = 'Totopos con salsa';
}
