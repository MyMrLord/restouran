const btn = document.querySelector('#menu-add');
const key = document.querySelector('#key');
btn.addEventListener('click',() => {
    key.classList.toggle('disp');
});