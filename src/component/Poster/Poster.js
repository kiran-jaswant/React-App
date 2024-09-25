import React from 'react'
import posterimg from './poster.jpg'
import './poster.css'

function Poster() {
  const posterimg = {
    height: '450px',
    width: '450px',
    margin: '10px',
    marginLeft: '150px'
}
  const body = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  const tagline = {
    position: 'relative',
    right: '200px',
    top: '100px'
  }
  const btn = {
    backgroundColor: 'aqua',
    padding: '15px 30px',
    margin: '40px 10px',
    borderRadius: '20px',
    fontSize: '18px'}
  return (
    <div style={body}>
      <img src='https://img.freepik.com/premium-vector/library-with-picture-library-with-book-called-library_1086266-27812.jpg?w=740'
        style={posterimg}></img>
      <div style={tagline}>
        <h1 style={{fontWeight:'bolder'}}>Your Library : Door to Knowledge</h1>
        <p style={{ fontStyle: 'italic', fontSize:'17px', marginTop:'30px' }}>Your gateway to knowledge and imagination.Nothing is pleasanter than exploring a library.</p>
        <button style={btn}>Explore</button>
      </div>

    </div>
  )
}

export default Poster
