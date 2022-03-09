import React from 'react';

export function check(inputObj) {
  const myemail = inputObj.myemail;
  const mypass = inputObj.mypassword;
  let errList = [];

  const validateEmail = (email) => {
  return String(email).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);};

  const val = validateEmail(myemail);
  if(!val) {errList.push(<li key='1'>Email is not valid</li>);}
  if(mypass.length < 3) {errList.push(<li key='2'>password too short</li>);}

  return errList;
}
