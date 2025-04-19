window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.emotion-buttons button');

  // Mood → background + prompt mapping
  const moodInfoMap = {
    happy: {
      background: './images/sunny.jpg',
      prompt: "What made you smile today?"
    },
    sad: {
      background: './images/rainy.jpg',
      prompt: "Write a message to your future self on how you’ll get through this."
    },
    angry: {
      background: './images/stormy.jpg',
      prompt: "What would help you release this anger in a healthy way?"
    },
    anxious: {
      background: './images/foggy.jpg',
      prompt: "What’s one small thing you can control right now?"
    },
    calm: {
      background: './images/mountain.jpg',
      prompt: "Describe a peaceful moment you wish to revisit."
    },
    lucky: {
      background: './images/clover.jpg',
      prompt: "What are you feeling grateful for today?"
    }
  };

  // Set initial prompt message
const promptBox = document.getElementById('prompt-box');
if (promptBox) {
  promptBox.innerText = 'Let your heart speak—pick an emotion to reflect.';
}


  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.className; // e.g., "happy", "sad", "angry", "anxious", "calm", "lucky"

      // Save to localStorage
      const moodPlants = JSON.parse(localStorage.getItem('moodPlants')) || [];
      moodPlants.push({ mood });
      localStorage.setItem('moodPlants', JSON.stringify(moodPlants));

      // Get background and prompt data
      const moodData = moodInfoMap[mood];

      // Set background
      if (moodData && moodData.background) {
        document.body.style.backgroundImage = `url('${moodData.background}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
      }

      // Show the prompt box and set reflection prompt
      if (promptBox && moodData && moodData.prompt) {
        promptBox.innerText = moodData.prompt;
      }


      alert(`You planted a ${mood} mood! 🌱`);
    });
  });

  // Save reflection event
  const saveButton = document.getElementById('save-reflection');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      const reflectionText = document.getElementById('reflection-input')?.value.trim();
      const promptText = document.getElementById('prompt-box').innerText || "No prompt";
      const moodPlants = JSON.parse(localStorage.getItem('moodPlants')) || [];


      const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
      journalEntries.push({
        date: new Date().toLocaleString(),
        prompt: promptText,
        reflection: reflectionText,
        mood: moodPlants[moodPlants.length - 1]?.mood || "unknown"
      });

      localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

      alert("Your reflection was saved! 📝");

      // Clear textarea
      document.getElementById('reflection-input').value = '';
    });
  }

});

// Clear Garden function to remove all plants
function clearGarden() {
  localStorage.removeItem('moodPlants'); // Clear the mood plants data from localStorage
  const garden = document.getElementById('garden');
  if (garden) {
    garden.innerHTML = ''; // Clear all the plant images from the garden
  }

  const promptBox = document.getElementById('prompt-box');
  if (promptBox) {
    promptBox.innerText = ''; // Clear the prompt too
    promptBox.style.display = 'none'; // Hide prompt box when garden is cleared
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
    document.body.style.backgroundImage = "url('./images/Day_Cloudy.png')"; // Change to rainy background
  });

  // When emotion = angry, change stormy.png
  const angryButton = document.querySelector('.angry');
  angryButton.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./images/stormy.jpg')"; // Change to stormy background
  });
});

*/
