import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const inputLink = document.querySelector('input');
const textareaLink = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
updateOutput();

form.addEventListener('submit', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

form.addEventListener('input', throttle(formInput, 500));

function formInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: inputLink.value, text: textareaLink.value }),
  );
}

function updateOutput() {
  const saveText = localStorage.getItem(LOCALSTORAGE_KEY);
}
