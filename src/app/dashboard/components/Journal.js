import React, { useState } from 'react';


const JournalApp = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      alert('Please fill in both title and body.');
      return;
    }
    const newEntry = {
      id: Date.now(),
      title,
      body
    };
    setEntries([...entries, newEntry]);
    setTitle('');
    setBody('');
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div className="journal-app-container">
      <div className="journal-app">
        <h1>My Journal</h1>
        <div className="entry-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="input-group">
              <label>Body:</label>
              <textarea
                placeholder="Body"
                value={body}
                onChange={handleBodyChange}
              />
            </div>
            <button type="submit">Add Entry</button>
          </form>
        </div>
        <div className="entries">
          <h2>Entries</h2>
          <ul>
            {entries.map(entry => (
              <li key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JournalApp;