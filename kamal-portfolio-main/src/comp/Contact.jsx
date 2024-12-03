import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kzx92n4', 'template_bx4dy3j', form.current, {
        publicKey: 'rX320s7qsYqeiKXoN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const contact_info = [
    { logo: 'mail', text: 'dudekulakamal16@gmail.com' },
    { logo: 'logo-whatsapp', text: '+91-8688297188' },
    { logo: 'location', text: 'Hyderabad' },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        <div className="mt-16 flex md:flex-row-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            name="submit-to-google-sheet"
            className="flex flex-col flex-1 gap-5"
            id="form"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React from 'react';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// const Contact = () => {
//   const form = useRef();
//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_kzx92n4', 'template_bx4dy3j', form.current, {
//         publicKey: 'rX320s7qsYqeiKXoN',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
      
//   };


//   const contact_info=[
//     {logo:'mail',text:"tejamandhadapu197@gmail.com"},
//     {logo:'logo-whatsapp',text:"8977183208"},
//     {logo:'location',text:"Kurnool"},
//   ]
//   return (
//     <section id="contact" className='py-10 px-3 text-white'>
//       <div className='text-center mt-8'>
//         <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
//         <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
//         <div className='mt-16 flex md:flex-row-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
//         <form name="submit-to-google-sheet" className='flex flex-col flex-1 gap-5' id="form" ref={form} onSubmit={sendEmail}>
//           <input type="text" placeholder='Your name' name="user_name"></input>
//           <input type="Email" placeholder='Your Email Address' name="user_email"/>
//           <textarea placeholder='Your Message' rows={10} name='message'></textarea>
//           <button className='btn-primary w-fit'>Send Message</button>
//         </form>
//         <div className='flex flex-col gap-7'>
//           {
//             contact_info.map((contact,i)=>(
//               <div key={i} className='flex gap-4 w-fit items-center'>
//           <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
//             <ion-icon name={contact.logo}></ion-icon>
//           </div>
// <p className='text-base'>{contact.text}</p>
//           </div>
//             ))
//           }
//         </div>

//         </div>
//       </div>
//     </section>
//   )
// }
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwjHeja4gWQAFZBitYuGKlIKE8CGNfv5NF-_sxDkak/dev'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("form")
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//       msg.innerHTML = "Details have been sent Successfully!"
//       setTimeout(function () {
//         msg.innerHTML = ""
//       }, 5000)
//       form.reset()
//     })
    // .catch(error => console.error('Error!', error.message))
// })
// export default Contact
