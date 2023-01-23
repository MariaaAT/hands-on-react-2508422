import React, { Component, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';

function App() {
  const name = 'StarGazers'
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the Stargazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their 
        enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCast onChoice={(info) => { setMemberInfo(info) }} />
     {/*Modify the way we make the dialog box appear*/}
        {memberInfo && <Modals member={memberInfo} handleClose={() => {setMemberInfo(null)}}></Modals>}
     {/*What is happening is that whenever we click the button Close (created in Modals) we set the member info to null. There's no info to show. 
        Then, memberInfor is false and all the modal component doesn't work
        In addition, in this case we use memberInfo and setmemberInfo because we are using the useState hook. In the case of Modal we were just using
        member because it wasn't connected to the useState hook*/}
      </hgroup>
    </div>
  )
}
export default App
