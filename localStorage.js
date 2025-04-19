let entries = JSON.parse(localStorage.getItem('gardenEntries')) || [];

entries.forEach(entry => {
  const plant = document.createElement('img');
  plant.src = `./plants/${entry.mood}.png`;
  plant.title = entry.note;
  garden.appendChild(plant);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const note = document.getElementById('note').value;

  // Saves last saved entry
  const entry = { mood, note };
  entries.push(entry);
  localStorage.setItem('gardenEntries', JSON.stringify(entries));

  // Add plant visually
  const plant = document.createElement('img');
  plant.src = `./plants/${mood}.png`;
  plant.title = note;
  garden.appendChild(plant);
});
