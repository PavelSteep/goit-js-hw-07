const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = ''; // Очистка перед добавлением новой коллекции
    createBoxes(amount);
    input.value = ''; // Очистка поля ввода
  } else {
    alert("Введите число от 1 до 100.");
  }
});

btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = ''; // Очистка контейнера
});

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }

  boxes.append(...elements); // Добавляем все элементы за одну операцию
}
