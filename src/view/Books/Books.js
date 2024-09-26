import React from 'react'
import './Books.css'
import Navbar from '../../component/Navbar/Navbar'
import Book from '../../component/Book/Book'

import Book1 from './book1.jpeg'
import Book2 from './book2.jpeg'
import Book3 from './book3.jpeg'
import Book4 from './book4.jpeg'

function Books() {
  return (
    <div>
      <Navbar></Navbar>
      <div  className='books-container'>
        <Book poster={Book1} name='The Sound Of Hours' price='250'></Book>
        <Book poster={Book2} name='The Famous Five' price='150'></Book>
        <Book poster={Book3} name='Peter Pan' price='100'></Book>
        <Book poster={Book4} name='The Jumble Book' price='200'></Book>

      </div>
      
    </div>
  )
}

export default Books
