import React from 'react'

export default () => (
  <div className="column is-half">
    <iframe name="votar" style={{display:'none'}}></iframe>
    <form action="https://www.iamtimsmith.com/mailer.php" method="post" target="votar" id='contact'>
      <p id='formResponse' style={{color:'green', opacity:'0', transition:'opacity .25s', textAlign:'center'}}>Thanks for reaching out to me. I'll be in contact as soon as possible!</p>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
			<p style={{display:'none'}}>Empty: <input type="text" name="url" /></p>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <input type="submit" name="submit" value="Hire Me!" onClick={formSumbit}/>
    </form>
  </div>
)

const formSumbit = () => {
  setTimeout( () => {
    document.getElementById('contact').reset()
    document.getElementById('formResponse').style.opacity = '1'
  }, 1000)
}