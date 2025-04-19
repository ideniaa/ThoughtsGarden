window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.emotion-buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.className; // e.g., "happy", "sad", "angry"

      // Save to localStorage
      const moodPlants = JSON.parse(localStorage.getItem('moodPlants')) || [];
      moodPlants.push({ mood });
      localStorage.setItem('moodPlants', JSON.stringify(moodPlants));

      alert(`You planted a ${mood} mood!`);

    
    });
    
  });

});


// Clear Garden function to remove all plants
function clearGarden() {
  localStorage.removeItem('moodPlants'); // Clear the mood plants data from localStorage
  const garden = document.getElementById('garden');
  if (garden) {
      garden.innerHTML = ''; // Clear all the plant images from the garden
  }
  alert('Your garden has been cleared!');
}


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

