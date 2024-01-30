// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BoardRoutes from './board/BoardRoutes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/board">게시판 목록</Link> | 
          <Link to="/board/create">게시글 작성</Link>
        </nav>
        <BoardRoutes />
      </div>
    </Router>
  );
}

export default App;
