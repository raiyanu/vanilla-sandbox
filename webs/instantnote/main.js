// Get a reference to the database
var database = firebase.database();
 
// Function to add a note to the database
function addNote() {
  var noteText = document.getElementById("noteInput").value.trim();
  var pw = document.getElementById("pw").value.trim();
  var name = document.getElementById("name").value.trim();
  if (noteText !== "") {
    // Create a random number and append it to noteKey
    rand = Math.floor(Math.random() * (99999 - 11111) ) + 11111;
    noteKey = "note-" + rand;
    // Create an object for the note data
    var noteData = {
      id: noteKey,
      text: noteText,
      name: name,
      pw: pw
    };
    // Save the note object to the database
    database.ref('notes/' + noteKey).set(noteData);
    // Clear the input field
  document.getElementById("noteInput").value = "";
  document.getElementById("pw").value = "";
  document.getElementById("name").value = "";
  }
 
}