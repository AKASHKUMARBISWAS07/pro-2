import React,{useState} from 'react';
import '../index.css';
import '../app.css'
import {NavLink} from 'react-router-dom'

export default function Header() {

const [Show,setShow]=useState("pt1")
const Show1=()=>{
  setShow("pt11")
}

  return (
    <>
    <br/>
    <div className='text-center'>
    <p className='rtt'>The</p>
    <span className='fs-1 ss'>KNOWLEDGE</span>
    </div>
    <div className='menu' onClick={Show1}></div>
    <div id={Show} className=' nsn'>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/">Home</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/Finance">Finance</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/environment">Environment</NavLink><br/><hr/><br/>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/Worldwide">Worldwide</NavLink><br/><hr/><br/>
        
    </div>

    <div className='pt nsn'>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/">Home</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/finance">Finance</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/environment">Environment</NavLink>
        <NavLink className='h12 text-decoration-none' style={{textDecoration:"none",color:"#000",fontSize:"20px"}} to="/Worldwide">Worldwide</NavLink>
        
    </div>
    <hr className='hdtp' />
    </>
  )
}