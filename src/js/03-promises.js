import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form:document.querySelector('.form'),
  delay:document.querySelector('[name="delay"]'),
  step:document.querySelector('[name="step"]'),
  amount:document.querySelector('[name="amount"]')
}

refs.form.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault();

  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);

  for(let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position,delay})
      } else {
        reject({position,delay})
      }
    }, delay)
  })
  return promise;
}

