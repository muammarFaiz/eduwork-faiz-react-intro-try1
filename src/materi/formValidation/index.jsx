import React from 'react';
import {check} from './validate.jsx';
// TODO: re-learn the validation, useState, and useEffect from Youtube
// TODO: re-learn how to use news api, bootstrap cards, searchbar, update react when submit

export default function Myform() {
  const [userinp, setuserinp] = React.useState({myemail: '', mypassword: ''});
  const [err, seterr] = React.useState([]);

  React.useEffect(() => {console.log('re-render');});

  function submitme(val) {
    val.preventDefault();
    const res = check(userinp);
    if(res.length === 0) {
      seterr(
        <div>
          <h5>email:</h5><h4>{userinp.myemail}</h4>
          <h5>password:</h5><h4>{userinp.mypassword}</h4>
        </div>
      )
      console.log(`tugas:
        email: ${userinp.myemail}
        password: ${userinp.mypassword}`);
    } else {seterr(res);}
    // console.log(userinp);
    // console.log('res: ', res);
    // console.log('err: ', err);
  }

  function updateIn(val) {
    if(val.target.name === 'email') {
      setuserinp(prev => {return {...prev, myemail: val.target.value};});
    } else {
      setuserinp(prev => {return {...prev, mypassword: val.target.value};});
    }
  }

  return (
    <>
      <form className="">
        <label htmlFor="myemail">Email</label><br />
        <input type="email" id="myemailid" name="email" value={userinp.myemail}
        onChange={updateIn} /><br />
        <label htmlFor="mypass">Password</label><br />
        <input type="password" id="mypassid" name="password" value={userinp.mypassword}
        onChange={updateIn} /><br />
        <p>panjang password minimal 3 karakter</p>
        <button type="submit" name="mybutton" onClick={submitme}>Submit</button>
      </form>
      {err}
    </>
  )
}
