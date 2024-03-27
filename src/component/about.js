import React from 'react';
import './about.css';

export default function About({image}) {
  return (
    <div className='about-container'>
      <h2>ABOUT ME</h2>
      <div className='about'>
      <div className='about-img'>
            <img src={image}></img>
        </div>
        <div className='about-text'>
            <h1>Sagar Shinde...</h1>
            <p>The graphic and typographic operators know this well, in reality all the professions dealing with the universe of but what is it?</p>
            <div className='icon'>
              <a href='#'><i class="fa-brands fa-instagram"></i></a>
              <a href='#'><i class="fa-brands fa-facebook"></i></a>
              <a href='#'><i class="fa-brands fa-twitter"></i></a>
              <a href='#'><i class="fa-brands fa-youtube"></i></a>
            </div>
            <button className='gitbtn'>Github</button>
        </div>
      </div>
        
      
    </div>
  )
}
