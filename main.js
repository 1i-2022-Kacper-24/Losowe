const surnames = [
  "Barczyński", "Bazyl", "Bączek", "Bąchór", "Bądyra", "Borowska",
  "Cebula", "Dąbkowski", "Gorzelak", "Grzesica", "Joniec", "Kardacz",
  "Kotuła", "Machulik", "Marcisz", "Neubauer", "Nencki", "Nowakowski",
  "Rutkowska", "Sachanek", "Sojko", "Szmidel", "Wickowski", "Wrażeń"
];

const randomized = [];
let drawPool = [];

function addSurname() {
  const input = document.getElementById('surnameInput');
  const name = input.value.trim();
  if (name) {
    surnames.push(name);
    input.value = '';
    updateSurnameList();
  }
}

function updateSurnameList() {
  const list = document.getElementById('surnameList');
  list.innerHTML = '';
  surnames.forEach(surname => {
    const li = document.createElement('li');
    li.textContent = surname;
    list.appendChild(li);
  });
}

function copyList() {
  drawPool = [...surnames];
  updateDrawPoolList();
  alert('Lista do losowania została utworzona!');
}

function drawSurname() {
  if (drawPool.length === 0) {
    alert('Brak nazwisk do losowania!');
    return;
  }
  const index = Math.floor(Math.random() * drawPool.length);
  const drawn = drawPool[index];
  randomized.push(drawn);

  drawPool = drawPool.filter(surname => surname !== drawn);

  updateDrawPoolList();
  updateRandomizedList();
}

function updateDrawPoolList() {
  const list = document.getElementById('drawPoolList');
  list.innerHTML = '';
  drawPool.forEach(surname => {
    const li = document.createElement('li');
    li.textContent = surname;
    list.appendChild(li);
  });
}

function updateRandomizedList() {
  const list = document.getElementById('randomizedList');
  list.innerHTML = '';
  randomized.forEach(surname => {
    const li = document.createElement('li');
    li.textContent = surname;
    list.appendChild(li);
  });
}

updateSurnameList();
