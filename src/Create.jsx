import React, { useState } from 'react';

function Create({ cdisplay, setCdisplay }   ) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  const submitc = () => {
    const newPost = { title, desc, date };
    setCdisplay([...cdisplay, newPost]); 
    setTitle("");
    setDate("");
    setDesc("");
    console.log(title);
    console.log(desc);
    console.log(date);

  };
  

  return (
    <div className="create-container">
      <h2>Create a New Blog</h2>

      <div className="form-group">
        <label>Enter Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Enter Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Publication Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button className="submit-btn" onClick={submitc}>Submit</button>
    </div>
  );
}

export default Create;
