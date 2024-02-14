import React from 'react'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/signup';

export default function DefaultLayout() {
    const{user,token}=useStateContext();
    const[view,setView]=useState(0);
    const PageDisplay=()=>{
      if(view===0){
          return <Login/>
      }
      else{
          return <Signup />
      }

  }
  return (
    <div>
      <div style={{paddingLeft:"10%",paddingTop:"5%"}}>
         <button className={`buttonAuth ${view === 0 ? 'active' : ''}`} onClick={()=>{setView(0)}}>Login</button> 
         <button className={`buttonAuth ${view === 1 ? 'active' : ''}`} onClick={()=>{setView(1)}}>inscrire</button>
      </div>
      <div class="row">
      <div className="col-6">
        <PageDisplay/>
      </div>
      <div className="col-6">
        <img className='image' src="/event.jpg" alt="Event Login" />
      </div>
      </div>
     
    </div>
  )
}
