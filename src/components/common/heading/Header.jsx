import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
    <Head/>
    <header>
        <nav className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
          <li>
            <Link to="/#Home">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Link>
            
            <div className="dropdown_menu absolute left-0 w-48 mt-2 bg-gray text-gray-900 shadow-lg rounded hidden group-hover:block">
              <ul>
                <li>
                  <Link to="/about#About ">About</Link>
                </li>
                <li>
                  <Link to="contact/#Contact">
                    <i className="fa fa-phone-square" aria-hidden="true"></i> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#I-am-a-Student">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i> I am a Student
            </Link>
            <div className="dropdown_menu">
              <ul>
                <li>
                  <Link to="/#Student-profile">Student Profile</Link>
                </li>
                <li>
                  <Link to="/cv-upload#Upload_CV">Upload CV</Link>
                </li>
                <li>
                  <a href="#Resume Building">
                    Resume Building <i className="fas fa-caret-right"></i>
                  </a>
                  <div className="dropdown_menu-1">
                    <ul>
                      <li>
                        <Link to="registration#Registration_forms">Registration Forms</Link>
                      </li>
                      <li><Link to="/services#Services">Services</Link></li>
                      <li><Link to="team#Team">Team</Link></li>
                      <li><Link to="blog#Blog">Blog</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="pricing#Pricing">Pricing</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#I-am-Professional">
              <i className="fa fa-user" aria-hidden="true"></i> I am Professional
            </Link>
            <div className="dropdown_menu-2">
              <ul>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#I-am-a-Parent">
              <i className="fa fa-user" aria-hidden="true"></i> I am a Parent
            </Link>
            <div className="dropdown_menu-3">
              <ul>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
                <li><Link to="#">Pric</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#I-am-a-Mentor">
              <i className="fa fa-user" aria-hidden="true"></i> I am a Mentor
            </Link>
            <div className="dropdown_menu-4">
              <ul>
                <li><Link to="#">Profile Creation</Link></li>
                <li><Link to="#">Mentorship Engagement</Link></li>
                <li><Link to="#">Resource Contribution</Link></li>
                <li><Link to="#">Feedback and Reports</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/#I-am-Job-Seeker">
              <i className="fa fa-user" aria-hidden="true"></i> I am Job Seeker
            </Link>
            <div className="dropdown_menu-5">
              <ul>
                <li><Link to="#">Profile Creation</Link></li>
                <li><Link to="#">Optimized CV</Link></li>
                <li><Link to="/JobForm#JobDescriptionForm">Job Form</Link></li>
                <li><Link to="FinancialOffer#FinancialOffer">Offer Calculator</Link></li>
              </ul>
            </div>
          </li>
        </ul>
        <div className='start'>
  <a href="/logo" className='button'>Log In</a>
</div>
<button className='toggle' onClick={() => setClick(!click)}>
  {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
</button>

            
        </nav>
    </header>
    </>
  )
}

export default Header