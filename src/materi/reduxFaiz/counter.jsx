import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, nozero} from '../../app/features/counter/actions.js';

export default function Myredux() {
  let count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch(nozero(1))}>decrement</button>
      <button onClick={() => dispatch(increment(1))}>increment</button>
    </>
  )
}
