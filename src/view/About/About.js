import React from 'react'
import './About.css'
import Navbar from '../../component/Navbar/Navbar'

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className='name'>About Us</h1>
        <p className='info'>Welcome to Library, a place where knowledge, inspiration, and community come together. For years, we’ve been dedicated to fostering a love for learning, providing access to a vast collection of books, digital resources, and cultural programs that cater to readers and learners of all ages.</p>
      </div>
      
        <h1 style={{textAlign:'center', textDecoration:'underline', margin:'70px'}}>What We Offer</h1>
        <div style={{display:'flex' ,margin:'15px 200px' ,flexWrap:'wrap'}}>
        <p className='bullet'>Extensive Collections</p>
        <p className='bullet'>Community Programs</p>
        <p className='bullet'>Technology and Resources</p>
        <p className='bullet'>Free WiFi</p>
        <p className='bullet'>Printing Services</p>
        <p className='bullet'>Author Talks</p>
        <p className='bullet'>Latest Bestsellers</p>
        <p className='bullet'>Latest Bestsellers</p>
        <p className='bullet'>Latest Bestsellers</p>
        

      
      </div>
      <div className='specialities'>
        <h1>Our Mission</h1>
        <p>We aim to be the heart of the community, where people come not only to borrow books but to connect, learn, and grow. </p>

      </div>
    </div>
  )
}

export default About
