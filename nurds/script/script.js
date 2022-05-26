const linkOpen = document.querySelector('.contacts_phone-number__btn');
const popup = document.querySelector('.modal__window');
const btnClose = document.querySelector('.btn__close');
const form = popup.querySelector('form');

const name = popup.querySelector('[name=name]');
const email = popup.querySelector('[name=email]');
const textarea = popup.querySelector('[name=textarea]');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

linkOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal__show');
    name.focus();
});

form.addEventListener('submit', function (evt) {
    if (!name.value || !email.value || !textarea.value) {
        evt.preventDefault();
        alert('Нужно ввести логин и пароль!')
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', name.value)
        }
    }
});

btnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show');
});