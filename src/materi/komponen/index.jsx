import React from 'react';
import ClassComponent from './pembahasan/ClassComponent.jsx';
import FuncComp from './pembahasan/functionalComp.jsx';

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama='faiz' />
        <FuncComp nama='rafii' />
      </div>
    )
  }
}
