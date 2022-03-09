import React from 'react';
import Child1 from './childs/child1.jsx';
import Child2 from './childs/child2.jsx';


export default function Mother() {
  const [n, setn] = React.useState(0);
  function modn(thenum) {
    setn(thenum);
  }
  return (
    <div className='mother'>
      <h1>Mother: {n}</h1>
      <Child1 fromMother={modn} />
      <Child2 mothernum={n} />
    </div>
  )
}
