import React from 'react'
import Left from '../NavBars/Left_Nav'
import Top from '../NavBars/Top_Nav'
import Mid from '../NavBars/Mid_body'
import './screen1.css'


function Screenone () {
  return (

    <div className="container">
      <div className="sub_body">
        <div className="header">
          <div className="sub_head"> <h1 className='h1'>Internships</h1></div>
          <button className='btn1'>Create New Internship</button>
        </div>
        <div className="top_na">
          <Top />
        </div>
        <div className='mid'>
          <Mid />
        </div>
      </div>
    </div>
  )
}

 export default Screenone

