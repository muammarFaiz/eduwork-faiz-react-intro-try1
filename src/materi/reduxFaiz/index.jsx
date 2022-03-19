import React from 'react';
import Counter from './counter.jsx';
import {Provider} from 'react-redux';
import store from '../../app/store';

export default function Myredux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
