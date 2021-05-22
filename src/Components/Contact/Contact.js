import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

 
const Contact =() =>{

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmailmessage', 'template_wz1x2gw', e.target, 'user_WtKKyFpySNzfnefuiiM3k')
      .then((result) => {
          alert('message Send Done Successfully')
      }, (error) => {
          alert(error.message);
      });
  }

  return (
      <div style={{background:"#252934"}} className="d-flex justify-content-center">  
          
    <form style={{width:'50%'}} className=" contact-form " onSubmit={sendEmail}>
                     
      <input className="form-control" type="hidden" name="contact_number" />
      <label style={{color:'white'}}>Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label style={{color:'white'}}>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label style={{color:'white'}}>Message</label>
      <textarea className="form-control" name="message" />
      <br></br>
      {/* <input className="btn-2 icon-down" type="submit" value="Send" /> */}
      <button class="btn-2 icon-up" type="submit" value="Send"><span>Send</span></button>
    </form>
    
    </div>
  );
}
 export default Contact;

 