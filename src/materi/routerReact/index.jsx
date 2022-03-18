import React from 'react';
import {BrowserRouter, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';
import Intro from './intro.jsx';
import Brands from './first/brands.jsx';
import Titles from './first/titles.jsx';

export default function Main() {
  const [username, setusername] = React.useState('');
  function userInput(name) {
    setusername(name);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Intro func={userInput}/>}>
          <Route path={'welcome/:user'} element={
            <><h4>welcome {username}</h4>
            <Link to={'/inventory'}>Show inventory</Link></>
          } />
          <Route path='inventory' element={
            <><br />
            <Link to={'titles'}>Titles</Link><br />
            <Link to={'brands'}>Brands</Link><br />
            <Outlet />
            </>
          }>
            <Route path='titles/*' element={<Titles />} />
            <Route path='brands/*' element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
