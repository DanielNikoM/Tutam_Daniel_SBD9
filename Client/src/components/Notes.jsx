import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css'; // Impor file CSS

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);
  const BASE_URL = 'http://localhost:8463';

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/notes`);
      const data = response.data;
      setNotes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
      });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="container">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
          <div className="note-actions">
            <button
              className="button-delete"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
            <Link
              to={`/notes/${note.id}/edit`}
              className="link-edit"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
      <Link
        to="/notes/new"
        className="link-new-note"
      >
        Create New Note
      </Link>
    </div>
  );
}

export default Notes;
