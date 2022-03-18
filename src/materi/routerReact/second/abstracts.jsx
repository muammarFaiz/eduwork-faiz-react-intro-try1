import React from 'react';
import {useParams} from 'react-router-dom';

export default function Titles() {
  return <h2>hi me Abstracts {useParams().title}</h2>;
}
