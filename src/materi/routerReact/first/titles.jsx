import React from 'react';
import {Link, Outlet, Routes, Route} from 'react-router-dom';
import Abstracts from '../second/abstracts.jsx';

export default function Titles() {
  return (
    <>
      <h2>hi me titles</h2>
      <Link to='abstracts/trees'>Trees</Link><br />
      <Link to='abstracts/rocks'>Rocks</Link><br />
      <Outlet />
      <Routes>
        <Route path='abstracts/:title' element={<Abstracts />} />
      </Routes>
    </>
  )
}
