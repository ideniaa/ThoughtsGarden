const form = document.getElementById('mood-form');
const garden = document.getElementById('garden');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const mood = document.getElementById('mood').value;
  const note = document.getElementById('note').value;

  const plant = document.createElement('img');
  plant.src = `./plants/${mood}.png`; // Store mood plant images in a folder
  plant.alt = mood;
  plant.title = note;

  garden.appendChild(plant);
});


