// import React, {useRef, useEffect } from 'react';

// import Typed from 'typed.js';

import hero from '../assets/images/kamal pic.jpg';

const Hero = () => {


  // useEffect(()=>{
  //    const typed = new Typed("#typed-string",{
  //     strings:[
  //       "Software Developer",
  //       // "React Developer+",
        
  //       "Java Developer"
  //     ],
  //     typeSpeed:100,
  //     backDelay:100,
  //     loop:true,
  //    })

     
     


  // },[])
  const social_media = [
    { logo: 'logo-linkedin', link: 'https://www.linkedin.com/in/dudekula-kamal-6709032b4/' },
    {logo:'logo-github', link:'https://github.com/kamal042002'},
    // { logo: 'logo-instagram', link: 'https://www.instagram.com/' },
    // { logo: 'logo-facebook', link: 'https://www.facebook.com/' },
    
  ];

  return (
    <section id="home" className='min-h-screen flex py-10 md:flex-row flex-col items-center text-white'>
      <div className='flex-1 flex items-center justify-center h-full'>
        {/* <img src={hero} alt="" className=' h-auto md:h-96 object-cover border-r-2 ' style={{ maxWidth: '100%' }}></img> */}
        <img src={hero} alt="" className='h-auto md:h-96 object-cover border-r-2 rounded-xl' style={{ maxWidth: '100%' }} />
        {/* <div className="bg-gray-500 rounded-xl p-4">
  <img src={hero} alt="" className='h-auto md:h-96 object-cover rounded-xl' style={{ maxWidth: '100%' }} />
</div> */}

      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello!
              <br />
            </span>
            <span>I'm Kamal Dudekula</span>
          </h1>
          <h4 id='typed-string' className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400'>
          Data Analyst
          </h4>
           
          {/* <button className='btn-primary mt-8' onClick={Contact}>Contact Me</button> */}
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-8'>
            {social_media?.map((icon, i) => (
              <div key={i} className='text-gray-400 hover:text-white cursor-pointer'>
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
