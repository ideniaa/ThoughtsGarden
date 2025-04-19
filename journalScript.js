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
  
  
// Display date only in scrollable list
function addEntryToPage(date, text) {
  const entryList = document.getElementById("entry-list");
  const li = document.createElement("li");

  li.innerHTML = `<button class="entry-button">${date}</button>`;
  li.addEventListener("click", () => {
      alert(`📖 Entry on ${date}:\n\n${text}`);
  });

  entryList.appendChild(li);
}