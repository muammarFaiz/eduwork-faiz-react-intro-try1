import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Newsapi from './index.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Newsapi />} />
      </Routes>
    </BrowserRouter>
  )
}
