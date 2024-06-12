function validateEmail(event) {
  event.preventDefault();
  const email = document.querySelector('.registration-form__input').value;
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Регулярное выражение для проверки формата email

  if (re.test(email)) {
    alert('Welcome to the team!');
  } else {
    alert('Email is invalid');
  }
}

document.querySelector('.registration-form__btn').addEventListener('click', validateEmail);
document.querySelector('.registration-form__input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Предотвращаем отправку формы при нажатии Enter
    validateEmail(event);
  }
});

const form = document.querySelector('.registration-form__form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
});
