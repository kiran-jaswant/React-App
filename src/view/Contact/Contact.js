import React from 'react'
import './Contact.css'

import Navbar from '../../component/Navbar/Navbar'

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
<div style={{display:'flex', justifyContent:'space-around'}}>
<img src='https://img.freepik.com/premium-vector/online-support-illustration-flat-design-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-824.jpg?w=740' style={{width:'700px'}}></img>

<h1 className='contact-heading'>Contact Us </h1>
      <div className='Contact-block'>
        
        <p><span className='bold'>Email:</span>Library@gmail.com</p>
        <p><span className='bold'>Mobile number:</span>91223444555</p>
        <p><span className='bold'>Address:</span>Laxmi Nagar,Khamla Road,Pune</p>

      </div>
</div>
      
    </div>
  )
}

export default Contact
