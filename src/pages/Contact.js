import React from 'react';

const Contact = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input className="p-2 border" type="text" placeholder="Your Name" />
        <input className="p-2 border" type="email" placeholder="Your Email" />
        <textarea className="p-2 border" placeholder="Your Message"></textarea>
        <button className="bg-blue-500 text-white py-2">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
