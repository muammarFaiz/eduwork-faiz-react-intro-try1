import React from 'react';
import FriendsTable from './smallComp/tableOfFriends.jsx';
import Mygrid from './smallComp/mygrid.jsx';
import Skills from './smallComp/skilllist.jsx';
import Contactform from './smallComp/contactform.jsx';

export default function Main() {
  return (
    <>
    <div className='myPaper'>
      <h2>Biografi</h2>
      <p>Halo, perkenalkan nama saya Muammar Faiz, saat ini saya belajar di Eduwork, keseharian saya adalah belajar. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sed labore illum perspiciatis laboriosam aperiam provident qui quisquam necessitatibus nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, excepturi</p>
      <hr />
        <Mygrid />
      <hr />
        <h2>Skill</h2>
        <Skills />
      <hr />
      <h2>My Close Friends</h2>
      <FriendsTable />
      <hr />
      <div className='contactground'>
        <h2>Contact Me</h2>
        <Contactform />
      </div>
    </div>
    </>
  )
}
