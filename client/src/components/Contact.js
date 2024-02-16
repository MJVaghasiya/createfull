import React from 'react';


const Contact = () => {

  return (
    <div>
        <div className='box'>
      <div className='container'>
          <input name="name" class="fname" placeholder="Name"/>
          <input name="email" class="fname" placeholder="Email" />
          <input name="phone" class="fname" placeholder="phone number" />
          <textarea placeholder='feedback' style={{'height':'150px','width':'100%'}}></textarea>
          <button type='submit' className=''>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
