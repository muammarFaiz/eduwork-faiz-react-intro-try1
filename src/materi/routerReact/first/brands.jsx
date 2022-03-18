import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import Cars from '../second/cars.jsx';

export default function Brands() {
  return (
    <>
    <h2>car brands</h2>
    <Link to='cars/bmw'>BMW</Link><br />
    <Link to='cars/honda'>Honda</Link><br />
    <Routes>
      <Route path='cars/:brand' element={<Cars />} />
    </Routes>
    </>
  )
}
