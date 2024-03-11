import React from 'react'
import './skill.css';

export default function Skill() {
  return (
    <>
    <div className='Skill-container'>
        <h2>My Skills</h2>
        <div className='progress-container'>
          <span>HTML</span>
          <div className='my-progress'>
            <div className='progress'>
              80%
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
