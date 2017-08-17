collectParams();
viewFullNote();
viewForm();

var noteList = new NoteList();

function collectParams() {
  document
    .getElementById("evil_form")
    .addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault();
      getInput();
      resetForm();
    });
};

function getInput() {
  input = document.forms[0].new_evil_note.value;
  noteList.addNote(input);
  var index = noteList.noteArray().length - 1
  document
    .getElementById("evil_list")
    .innerHTML += "<li><a href='#" + index + "'>" +  noteList.displayLastNote() + "<a/></li>";
};

function resetForm() {
  document
    .getElementById("evil_form")
    .reset();
};

function viewFullNote() {
  window
  .addEventListener("hashchange", function() {
    console.log(getNoteFromUrl(location));
    if (getNoteFromUrl(location)) {
    document
    .getElementById("evil_note_text")
    .innerHTML = showOneNote();
    revealElement("full_evil_note")
    hideElement("evil_form_and_list")
  };
  });
};

function viewForm() {
  document
  .getElementById("evil_button")
  .addEventListener("click", function() {
    window.location.replace("#");
    revealElement("evil_form_and_list")
    hideElement("full_evil_note")
  })
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showOneNote() {
  return noteList.showNote(getNoteFromUrl(window.location));
};

function hideElement(id) {
  document
  .getElementById(id)
  .style = "display:none;";
}

function revealElement(id) {
  document
  .getElementById(id)
  .style = "";
}
