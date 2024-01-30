// src/board/BoardRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './List';
import Create from './Create';
import Edit from './Edit';

function BoardRoutes() {
  return (
    <Routes>
      <Route path="/board" element={<List />} />
      <Route path="/board/create" element={<Create />} />
      <Route path="/board/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default BoardRoutes;
