import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.start.disabled = false;
    }
  },
};

refs.start.addEventListener('click', () => {
  timer.start();
});
refs.start.disabled = true;
flatpickr(refs.input, options);

const timer = {
  intervalId: null,
  start() {
    const intervalId = setInterval(() => {
      const deltaTime = new Date(refs.input.value) - Date.now();
      if (deltaTime > 0) {
        const { days, hours, minutes, seconds } = convertMs(deltaTime);

        refs.daysValue.textContent = `${days}`;
        refs.hoursValue.textContent = `${hours}`;
        refs.minutesValue.textContent = `${minutes}`;
        refs.secondsValue.textContent = `${seconds}`;
        refs.start.disabled = true;
        convertMs(deltaTime);
      } else {
        clearInterval(intervalId);
        refs.start.disabled = false;
        refs.timer.style.color = 'green';
        Notify.success('Countdown is finished');
      }
    }, 1000);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
