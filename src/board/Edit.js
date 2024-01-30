// src/board/Edit.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams(); // URL에서 id 파라미터 추출
  const navigate = useNavigate();

  useEffect(() => {
    // 게시글 데이터를 불러옵니다.
    axios.get(`http://localhost:4000/board/${id}`)
      .then(response => {
        const data = response.data;
        setTitle(data.title);
        setContent(data.content);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정된 게시글 데이터를 서버에 전송합니다.
    axios.put(`http://localhost:4000/board/${id}`, { title, content })
      .then(() => {
        navigate('/board'); // 성공적으로 수정되면 목록 페이지로 이동
      })
      .catch(error => {
        console.error('Error updating post: ', error);
      });
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
          <label>내용: <textarea value={content} onChange={e => setContent(e.target.value)} /></label>
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default Edit;
