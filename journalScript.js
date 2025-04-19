// journalScript.js

function saveText() {
    const text = document.getElementById('userEntry').value;
    localStorage.setItem('savedJournalEntry', text);
    alert("Journal entry saved!");
  }
  
  function clearText() {
    document.getElementById('userEntry').value = '';
  }
  
  // Load saved text on page load
  window.onload = function () {
    const saved = localStorage.getItem('savedJournalEntry');
    if (saved) {
      document.getElementById('userEntry').value = saved;
    }
  };
  