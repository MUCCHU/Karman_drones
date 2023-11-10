import React from 'react'
import pratham from '../Images/Pratham.png'

function Home() {
  return (
    <div className='home_main'>
      <h1 className='headline'>Meet Pratham: India's Drone Champion!</h1>
      <div className='img_wrapper'>
        <div className='img_div'>
          <img className='img' src={pratham} alt="" />
          <div className='img_name'>Pratham</div>
        </div>
        <div className="img_desc">
          <h2>Why Pratham?</h2>
          <p className='para'>
            <ul>
          <li>Unrivaled Endurance: 66 mins</li>
          
          <li>Max Speed: 12 m/s</li>
          
          <li>Operating Temp: -20°C to 60°C</li>
          
          <li>Live Feed: Up to 12 km</li>
          

          <li>Precision Navigation: Waypoint Excellence </li>
          <li>Safe Returns: Auto 'Return to Home' </li>
          <li>Built for Challenges: 600 m Operational Altitude </li>
          </ul>
          <br />
          {/* <hr /> */}
          <br />

          Choose Pratham for powerful, precise, and productive aerial missions. Elevate your possibilities with India's finest drone technology.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home