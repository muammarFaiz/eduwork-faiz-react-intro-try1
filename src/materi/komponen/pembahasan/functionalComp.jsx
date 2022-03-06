import React from 'react';

export default function Pablo({nama}) {
  const [number, setnumber] = React.useState(0);
  function add() {
    setnumber(prev => {
      return prev + 1;
    })
  }
  function minus() {
    setnumber(prev => {
      if(prev > 0) {return prev - 1;}
      else {return 0}
    })
  }
  return (
    <div>
      <h1>this is from functional component: {nama}</h1>
      <button onClick={minus}>-</button>
      <span> {number} </span>
      <button onClick={add}>+</button>
    </div>
  )
}
