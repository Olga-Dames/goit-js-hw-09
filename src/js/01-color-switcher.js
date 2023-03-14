const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.start.addEventListener('click', () => {
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled')
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stop.addEventListener('click', () => {
  refs.stop.setAttribute('disabled', true)
  refs.start.removeAttribute('disabled');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
