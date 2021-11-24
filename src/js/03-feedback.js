import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const inputLink = document.querySelector('input');
const textareaLink = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
updateOutput();

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function formInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: inputLink.value, text: textareaLink.value }),
  );
}

function updateOutput() {
  const saveText = localStorage.getItem(LOCALSTORAGE_KEY);
  if (saveText) {
    inputLink.value = JSON.parse(saveText).value;
    textareaLink.value = JSON.parse(saveText).text;
  }
}
