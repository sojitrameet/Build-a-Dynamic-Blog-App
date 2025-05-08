import React from 'react'

import './App.css';
import Blog from './Blog';
import {  Link, Route, Routes } from 'react-router-dom';
import Create from './Create';
import { useState } from 'react';

function App() {
  const [cdisplay, setCdisplay] = useState([]);
  const blogDelete = (indexToDelete) => {
    setCdisplay(cdisplay.filter((_, index) => index !== indexToDelete));
  };

  const blogEdit = (indexToEdit, updatedBlog) => {
    const updatedList = [...cdisplay];
    updatedList[indexToEdit] = updatedBlog;
    setCdisplay(updatedList);
  };

  return (
    <>
  <nav className="navbar">
  <div className="nav-content">
    <Link to="/" className="nav-link">Create Blog</Link>
    <span className="separator">|</span>
    <Link to="/blog" className="nav-link">All Blog</Link>
  </div>
</nav>


  <Routes>
    <Route path="/" element={<Create cdisplay={cdisplay} setCdisplay={setCdisplay} />} />
    <Route path="/blog" element={<Blog cdisplay={cdisplay} blogDelete={blogDelete}    blogEdit={blogEdit}/>} />
  </Routes>
    </>
  );
}

export default App;
