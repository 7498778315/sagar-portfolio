import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <>
    <div className='contact-container'>
        <h3>Contact Me</h3>
        <div className='contact'>
            <div className='input'>
                <input type='text' id='name' placeholder='Enter Your Name'></input>
                <input type='email' id='email' placeholder='Enter Your Email'></input>
            </div>

            <div className='input'>
                <input type='tel' id='mob' placeholder='Enter Your Mobile'></input>
                <textarea id='text' placeholder='Send Message'></textarea>
                <button type='button' id='messagebtn'>Send Message</button>
            </div>
        </div>
      
    </div>
    </>
  )
}
