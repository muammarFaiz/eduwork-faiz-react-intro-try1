import React from 'react';
import {Link, Outlet, Routes, Route, useNavigate} from 'react-router-dom';

export default function Titles({func}) {
  const [input, setinput] = React.useState('');
  const navigate = useNavigate();
  return (
    <div className='main_container'>
      <h1 className='centerBlock'>welcome</h1>
      <input type="text" name="" value={input} onChange={val => setinput(val.target.value)} />
      <button type="button" name="button" onClick={
        () => {if(input) {
          func(input);
          navigate('/welcome/' + input);
        }}
      }>Submit</button><br />
      <Outlet />
    </div>
  );
}
