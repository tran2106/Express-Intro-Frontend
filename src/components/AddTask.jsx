import React, { useState } from "react";
import "./style.css";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ appendBook }) => {
  const [title, setTitle] = useState("");
  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("title", title);
    appendBook(title);
    clearForm();
  };

  const handleTitleChange = (event) => {
    setDirty(true);
    // Let's make sure the title has at least 4 characters in it
    setTitle(event.target.value);
    if (title.length < 4) {
      setTitleErrors(["title must have at least 4 characters"]);
    } else {
      setTitleErrors([]);
    }
  };

  const clearForm = () => {
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      {titleErrors.map((error) => (
        <p className="error" key={error}>
          {error}
        </p>
      ))}
      <button disabled={titleErrors.length > 0 || !dirty}>Create Book</button>
    </form>
  );
};

export default AddBook;
