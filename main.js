const toggle = document.querySelector('#toggle-password');
const password = document.querySelector('#password');

toggle.addEventListener('click', function () {
  // Toggle type attribute
  const inputType =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', inputType);

  // Toggle the icon
  this.classList.toggle('bi-eye');
});
