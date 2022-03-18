import React from 'react';
import {useParams, useMatch, useLocation} from 'react-router-dom';

export default function Titles() {
  return <h2>hi me Cars {useParams().brand}</h2>;
}
