"use client"
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Note from "@/components/Note";
import CreateArea from "@/components/CreateArea";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const newId = uuidv4();

    setNotes((prev) => [
      ...prev,
      { id: newId, title: newNote.title, content: newNote.content },
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
