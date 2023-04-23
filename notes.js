const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const notesContainer = document.getElementById("notes-container");
const notepadContent = document.getElementById("notepad-content");

// Add event listeners
saveButton.addEventListener("click", saveNote);
clearButton.addEventListener("click", clearNotepad);
notepadContent.addEventListener("keydown", autosizeNotepad);

// Functions
function saveNote() {
  const noteContent = notepadContent.innerHTML.trim();

  // Only save note if content is not empty
  if (noteContent !== "") {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = noteContent;
    notesContainer.appendChild(noteElement);

    notepadContent.innerHTML = "";
    notesContainer.classList.remove("hidden");
  }
}

function clearNotepad() {
  notepadContent.innerHTML = "";
}

function autosizeNotepad() {
  const maxHeight = 500;
  if (notepadContent.scrollHeight <= maxHeight) {
    notepadContent.style.height = notepadContent.scrollHeight + "px";
  } else {
    notepadContent.style.overflowY = "scroll";
    notepadContent.style.height = maxHeight + "px";
  }
}
