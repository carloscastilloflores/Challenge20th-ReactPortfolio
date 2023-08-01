import React from 'react'; 

export default function Contact() {
    return ( 
      <div>
        <form action="/" method="post">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }