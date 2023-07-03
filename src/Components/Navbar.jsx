import React from 'react'
import './Navbar.scss'

import { Person, Mail, GitHub, LinkedIn } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">


        <div className="left">
          <a href="#intro" className='logo'>Bhushan</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+8530295356</span>
          </div>

          <div className="itemContainer">
            <Mail className='icon' />
            <span>mbhushan4545@gmail.com</span>
          </div>

          <div className="itemContainer">
            <LinkedIn className='icon' />
            <span><a href="https://www.linkedin.com/in/bhushan-mali-24b269221/">Linkedin</a></span>
          </div>


          <div className="itemContainer">
            <GitHub className='icon' />
            <span><a href="https://github.com/BhushanMali45">Github</a></span>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>

            <span className='line3'></span>

          </div>
        </div>

      </div>
    </div>
  )
}
