const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', () => {
  text.textContent = input.value.trim() || 'Anonymous';
});
