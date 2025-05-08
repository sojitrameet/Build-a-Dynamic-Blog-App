import React, { useState } from 'react';
import './App.css';

function Blog({ cdisplay, blogDelete, blogEdit }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({ title: '', desc: '', date: '' });

  const blogedit = (index) => {
    setIsEditing(index);
    setEditData(cdisplay[index]);
  };

  const editSave = () => {
    blogEdit(isEditing, editData);
    setIsEditing(null);
    setEditData({ title: '', desc: '', date: '' });
  };

  return (
    <div className="blog-page">
      <h2>Blog Page</h2>

      {cdisplay.map((item, index) => (
        <div className="blog-card" key={index}>
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editData.title}
                placeholder="Title"
                className="input"
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
              <textarea
                value={editData.desc}
                placeholder="Description"
                className="textarea"
                onChange={(e) => setEditData({ ...editData, desc: e.target.value })}
              />
              <input
                type="date"
                value={editData.date}
                className="input"
                onChange={(e) => setEditData({ ...editData, date: e.target.value })}
              />
              <div className="btn-group">
                <button className="btn save" onClick={editSave}>Save</button>
                <button className="btn cancel" onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <small>{item.date}</small>
              <div className="btn-group">
                <button className="btn edit" onClick={() => blogedit(index)}>Edit Blog</button>
                <button className="btn delete" onClick={() => blogDelete(index)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;
