// src/board/List.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List() {
  const [list, setList] = useState([]);
  const [posts, setPosts] = useState([]);

  const getList = () => {
    axios.get('http://localhost:4000/board')
    .then(response => {
      setList(response.data); // 데이터를 상태에 저장합니다.
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
  }

  useEffect(() => {
    getList();
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때만 요청이 실행되도록 합니다.


  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/board/${id}`)
      .then(() => {
        getList();
      })
      .catch(error => {
        console.error('Error deleting the post: ', error);
      });
  };


  return (
    <div>
      <h1>게시판 목록</h1>
      <Link to="/board/create">새 게시글 작성</Link>
      <ul>
        {list.map(post => (
          <li key={post.id}>
            <Link to={`/board/edit/${post.id}`}>{post.title}</Link>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
