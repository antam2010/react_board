// src/board/Create.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4000/board`, { title, content })
      .then(() => {
        navigate('/board'); 
      })
      .catch(error => {
        console.error('Error updating post: ', error);
      });
  };

  return (
    <div>
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
          <label>내용: <textarea value={content} onChange={e => setContent(e.target.value)} /></label>
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default Create;
