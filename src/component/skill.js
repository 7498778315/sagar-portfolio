import React from 'react'
import './skill.css';

export default function Skill() {
  return (
    <>
    <div className='Skill-container'>
        <h2>My Skills</h2>
        <div className='progress-container'>
          <span>Html</span>
          <div className='my-progress'>
            <div className='progress' id='html'>
              80%
            </div>
          </div>
        </div>
        <div className='progress-container'>
          <span>Css</span>
          <div className='my-progress'>
            <div className='progress' id='css'>
              90%
            </div>
          </div>
        </div>
        <div className='progress-container'>
          <span>Java Script</span>
          <div className='my-progress'>
            <div className='progress' id='js'>
              75%
            </div>
          </div>
        </div>
        <div className='progress-container'>
          <span>Bootstrap</span>
          <div className='my-progress'>
            <div className='progress' id='bootstrap'>
              85%
            </div>
          </div>
        </div>
        <div className='progress-container'>
          <span>React-Js</span>
          <div className='my-progress'>
            <div className='progress' id='react'>
              70%
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
