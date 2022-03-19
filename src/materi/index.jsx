import React from 'react';
import Myredux from './reduxFaiz/index.jsx';
const mystyle = {
  'padding': '100px 50px 50px'
};
export default function Main() {
  return (
    <div style={mystyle}>
      <Myredux />
    </div>
  )
}
