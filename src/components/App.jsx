import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const newId = uuidv4();

    setNotes((prev) => [
      ...prev,
      { id: newId, title: newNote.title, content: newNote.content }
    ]);
  }

  function deleteNote(idForDeletion) {
    setNotes((prev) => prev.filter((note) => note.id !== idForDeletion));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
