import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './newnote.css'; // Impor file CSS

function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8463"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/notes`, { title, content });
      navigate("/notes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-note-container">
      <h1 className="new-note-title">Create New Note</h1>
      <form onSubmit={handleSubmit} className="new-note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="new-note-input"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="new-note-textarea"
        ></textarea>
        <button
          type="submit"
          className="new-note-button"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default NewNote;
