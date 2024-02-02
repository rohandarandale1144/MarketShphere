import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exlcusive offers on your Email</h1>
        <p>Subscribe to our newsletter & stay updated</p>
        <div>
            <input type="email" placeholder='Enter your E-mail'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
