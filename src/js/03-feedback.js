import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
//const button = form.lastElementChild;
const button = form.querySelector('button');

let formCurrentStatus = {
  email: '',
  message: '',
};
if (localStorage.getItem('feedback-form-state')) {
  formCurrentStatus = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = formCurrentStatus.email;
  form.elements.message.value = formCurrentStatus.message;
}

form.addEventListener('input', throttle(inputHandle, 500));
function inputHandle({ target }) {
  formCurrentStatus[target.name] = target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(formCurrentStatus)
  );
}

button.addEventListener('click', resetInfo);

function resetInfo(event) {
  event.preventDefault();
  console.log(formCurrentStatus);
  formCurrentStatus = {
    email: '',
    message: '',
  };
  localStorage.clear();
  form.elements.email.value = '';
  form.elements.message.value = '';
}
