document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = form.elements['name'];
  const messageInput = form.elements['message'];
  const phoneInput = form.elements['phone'];
  const emailInput = form.elements['email'];

  function showError(input, message) {
    const errorElement = input.closest('.form-group').querySelector('.error-message');
    errorElement.textContent = message;
    input.classList.add('error');
  }

  function clearError(input) {
    const errorElement = input.closest('.form-group').querySelector('.error-message');
    errorElement.textContent = '';
    input.classList.remove('error');
  }

  function validateField(input, validatorFn, errorMessage) {
    const value = input.value.trim();
    if (!validatorFn(value)) {
      showError(input, errorMessage);
      return false;
    }
    return true;
  }

  function addValidationListeners(input) {
    input.addEventListener('input', () => clearError(input));
  }

  [nameInput, messageInput, phoneInput, emailInput].forEach(addValidationListeners);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    isValid &= validateField(nameInput, val => val !== '', 'Ім’я обов’язкове');
    isValid &= validateField(messageInput, val => val.length >= 5, 'Повідомлення має містити не менше 5 символів');
    isValid &= validateField(phoneInput, val => /^\+380\d{9}$/.test(val), 'Телефон повинен починатися з +380 і містити 9 цифр');
    isValid &= validateField(emailInput, val => /^[^@]+@[^@]+\.[^@]+$/.test(val), 'Некоректна електронна пошта');

    if (isValid) {
      form.submit();
    }
  });
});
