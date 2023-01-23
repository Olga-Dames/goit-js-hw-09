const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.setAttribute('disabled', true);
});

refs.stop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
