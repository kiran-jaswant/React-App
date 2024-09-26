import React from 'react'
import './Book.css'

function Book(props) {
  const{poster,name,price}=props
  return (
    <div className='book-card'>
      <img src={poster} className='poster-img'></img>
      <h3 className='book-title'>{name}</h3>
      <p className='price'><span style={{fontWeight:'bold'}}>Price:</span> ₹{price}</p>
      
    </div>
  )
}

export default Book
