import React from 'react'

export default () => (
  <form action="https://formspree.io/tim@iamtimsmith.com" method="POST" id='contact' className='column is-half'>
    <input type="text" name="name" placeholder='Name' />
    <input type="email" name="_replyto" placeholder='Email' />
    <textarea name="message" placeholder='Message'></textarea>
    <input type="submit" value="Hire Me!" />
  </form>  
)