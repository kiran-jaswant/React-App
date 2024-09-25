import React from 'react'

import './choco.css'

function Kitkat({img,name,tagline}) {
  return (
    <div className='chocolate-card'>
        <img src={img} className='chocolate-img'></img>
        <h1 className='brand-name'>{name}</h1>
        <p className='tagline'>{tagline}</p>
      
    </div>
  )
}

export default Kitkat