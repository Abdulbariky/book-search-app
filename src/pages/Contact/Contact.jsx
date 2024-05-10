import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [alert, setAlert] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  let timeoutId;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const message = e.target.message.value.trim();

    if (!name ||!message) {
      setAlert('Please enter a name and message.');
      setShowAlert(true);
      return;
    }

    setAlert('Your email was sent!');
    setShowAlert(true);
    timeoutId = setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className='contact-page'>
      <h1 className='page-title'>Contact Us</h1>
      <div className='contact-content'>
        <div className='contact-form'>
          <h2 className='contact-title'>Send Us a Message</h2>
          <form className='contact-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='name' className='contact-input' />
            <input type='email' placeholder='Email' className='contact-input' />
            <textarea rows='4' placeholder='Message' name='message' className='contact-textarea' />
            <button type='submit' className='btn btn-submit'>Submit</button>
          </form>
          {showAlert && <div className='alert'>{alert}</div>}
          {showAlert && clearTimeout(timeoutId)}
        </div>
      </div>
    </div>
  );
};

export default Contact;