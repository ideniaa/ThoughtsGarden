// journalScript.js

// Load entries when page loads
window.addEventListener("DOMContentLoaded", () => {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.forEach(entry => {
      addEntryToPage(entry.date, entry.text);
  });
});

function saveText() {
    const text = document.getElementById('userEntry').value;
    const date = document.getElementById("entryDate").value;
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push({ date, text });
    localStorage.setItem("entries", JSON.stringify(entries));

    addEntryToPage(date, text);

    document.getElementById("entryDate").value = "";
    document.getElementById("userEntry").value = "";
    alert("Journal entry saved!");
  }
  
  function clearText() {
    document.getElementById("entryDate").value = "";
    document.getElementById('userEntry').value = '';
  }
  
  // Load saved text on page load
  window.onload = function () {
    const saved = localStorage.getItem('savedJournalEntry');
    if (saved) {
      document.getElementById('userEntry').value = saved;
    }
  };

  function saveEntry() {
    const text = document.getElementById('entry').value;
    if (!text.trim()) return;
  
    const date = new Date().toLocaleString();
    const newEntry = { date, text };
  
    let entries = JSON.parse(localStorage.getItem('journal')) || [];
    entries.push(newEntry);
  
    localStorage.setItem('journal', JSON.stringify(entries));
    document.getElementById('entry').value = '';
    displayEntries();
  }
  
  function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('journal')) || [];
    const container = document.getElementById('entries');
    container.innerHTML = '';
  
    entries.slice().reverse().forEach(entry => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${entry.date}</strong><p>${entry.text}</p><hr>`;
      container.appendChild(div);
    });
  }
  
  // Load entries on page load
  window.onload = displayEntries;
  
  
