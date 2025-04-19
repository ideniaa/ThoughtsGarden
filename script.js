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



// TO change background based on emotion, FIX FIX FIX 
/*

document.addEventListener("DOMContentLoaded", function() {

  // When emotion = happy, change sunny.png
  const happyButton = document.querySelector('.happy');
  happyButton.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./images/sunny.jpg')";
  });

  // When emotion = sad, change rainy.png
  const sadButton = document.querySelector('.sad');
  sadButton.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./images/rainy.jpg')"; // Change to rainy background
  });

  // When angry = happy, change stormy.png
  const angryButton = document.querySelector('.angry');
  angryButton.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./images/stormy.jpg')"; // Change to stormy background
  });
});

*/

