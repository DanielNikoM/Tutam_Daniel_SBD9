import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './editnote.css'; 

function EditNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8463";

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/notes/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNote();
  }, [id, BASE_URL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/notes/${id}`, { title, content });
      navigate("/notes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-note-container">
      <h1 className="edit-note-title">Edit Note</h1>
      <form onSubmit={handleSubmit} className="edit-note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="edit-note-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="edit-note-textarea"
        ></textarea>
        <button
          type="submit"
          className="edit-note-button"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditNote;
