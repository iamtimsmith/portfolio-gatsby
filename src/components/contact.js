import React from 'react'

export default () => (
  <div className="column is-half">
    <iframe name="votar" style={{display:'none'}}></iframe>
    <form action="https://www.iamtimsmith.com/mailer.php" method="post" target="votar" id='contact'>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Email" required />
			<p style={{display:'none'}}>Empty: <input type="text" name="url" /></p>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <input type="submit" name="submit" value="Hire Me!" />
    </form>
  </div>
)