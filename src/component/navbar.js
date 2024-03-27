import React, { useState } from 'react'
import './navbar.css';

export default function Navbar() {
    const[showhumberger,setshowhumberger] = useState(false)
    const[showform,setshowform] = useState(false)

    const toggle = () => {
        setshowhumberger(!showhumberger)
    }
    const display = () => {
        setshowform(!showform)
    }
  return (
    <>
     <header>
        <nav>
        <div className="left">
            <h1>Portfolio</h1>
        </div>
        <div className="right">
            <ul className={showhumberger ? "nav" : "" }>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">About</a> </li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>       
            </ul>
            <i className="fa-solid fa-bars" onClick={toggle}></i>   
        </div>
        <div className='loginbtn'>        
            <button type='button' onClick={display}>Login</button>
        </div>
        </nav> 
    </header>
    <div className="form-contaioner" id={showform ? "block" : ""}>
        <form action=''>
            <h2 className='title'>Sign Up</h2>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' placeholder='Enter Your Name'></input><br></br>
            <label htmlFor='mob'>Mobile No:</label>
            <input type='number' id='mob' placeholder='Enter Your Mobile No'></input><br></br>
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' placeholder='Enter Your Email'></input><br></br>
            <label htmlFor='pass'>Password:</label>
            <input type='password' id='pass' placeholder='Enter Your password'></input><br></br>
            <div className='btn'>
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>
        </form>
    </div>
    </>
  )
}
