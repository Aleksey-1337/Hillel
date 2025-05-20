const form = document.getElementById('contactForm');
const errorMessages = form.querySelectorAll('.error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  const nameInput = form.elements['name'];
  const messageInput = form.elements['message'];
  const phoneInput = form.elements['phone'];
  const emailInput = form.elements['email'];

  clearErrors();

  if (!nameInput.value.trim()) {
    showError(nameInput, 'Ім’я обов’язкове');
    isValid = false;
  }

  if (messageInput.value.trim().length < 5) {
    showError(messageInput, 'Повідомлення має містити не менше 5 символів');
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Телефон повинен починатися з +380 і містити 9 цифр');
    isValid = false;
  }

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, 'Некоректна електронна пошта');
    isValid = false;
  }

  if (isValid) {
    const formData = {
      name: nameInput.value.trim(),
      message: messageInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
    };
    console.log('Дані з форми:', formData);
    alert('Форму надіслано успішно!');
    form.reset();
  }
});

function showError(inputElement, message) {
  const error = inputElement.parentElement.querySelector('.error-message');
  error.textContent = message;
  error.style.color = 'red';
}

function clearErrors() {
  errorMessages.forEach(msg => (msg.textContent = ''));
}
