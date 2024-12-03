import React from 'react'
//import About from './About';
import pdf from '../assets/resume/RESUME.pdf';
const About = () => {
  const info=[
    {text:'Problems Solved',count:'250'},
    {text:'Completed Projects',count:'10'},
    
  ]
  return (
    <section id="about" className='py-10 text-white'>
    <div className='text-center mt-8'>
      <h3 className='text-4xl font-semibold'>
      About <span className='text-cyan-600'>Me</span>
      
      </h3>
      <p className='text-gray-400 my-3 text-lg'>My introduction</p>
      <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
        <div>
        <div className='text-gray-400 my-3 '>
          <p  className='font-normal'>
            I'm an enthusiastic student of mechanical with a talent for using technology to solve issues. Skilled in a variety of programming languages and frameworks, I enjoy keeping up with the most recent developments. I work best in group settings where I can combine my technical expertise with creative problem-solving to produce meaningful results. Whether I'm creating software or investigating new technologies, my motivation is to make a significant difference and to always strive for perfection.

          </p>
          <div className='flex mt-10 items-center justify-center gap-7 '>
            {
              info.map(content=>(
                <div key={content.text}>
                <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count}
                <span className='text-cyan-600'>+</span></h3>
                <span>{content.text}</span>
                </div>
              ))
            }
            
          <button className='btn-primary'>
          <a className="button" href={pdf} download="RESUME.pdf">Download CV</a></button>
          
          </div>
          <br/>
          <br/>
          
        </div>
        </div>
        <div></div>
      </div>
    
    </div>

    </section>
      
    
  );
}

export default About
