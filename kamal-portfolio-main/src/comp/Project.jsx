import React from 'react'
import {SwiperSlide} from "swiper/react";
import project1 from "../assets/images/hospitablity.jpg";
import project2 from "../assets/images/IncreasingPizzaSales.webp"
import project3 from "../assets/images/webpro.png"
import "swiper/css"
import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";
const Project = () => {
  return (
   <section id="projects" className='py-10 text-white'>
   <div className="text-center">
      <h3 className="text-4xl font-semibold">
        My <span className="text-cyan-600">Projects</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
    </div>
    <br/>
    <div className='flex max-w-5xl px-5 mx-auto items-center relative '>
  <div className='lg:w-1/3 flex items-center justify-between gap-6 '>
  
  <SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project1} alt="" className='rounded-lg w-full h-48 object-cover transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>Hospitality Analysis</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/kamal042002/Hospitality-Analysis" target="_blank" rel="noopener noreferrer" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
      <a href="https://app.powerbi.com/view?r=eyJrIjoiYzkxMjU5ODQtMDhmOC00NmQ5LWFmNzMtNDRmNjYxOTUzM2U1IiwidCI6Ijc0ZWU0ZDVlLWY0YmEtNGQxZS04ZDg1LWVkNWUxZjczNGUzYiJ9" target="_blank" rel="noopener noreferrer" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Live Dashboard</a>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project2} alt="" className='rounded-lg w-full h-48 object-cover transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>Pizza Sales Analysis</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/kamal042002/Pizza-Sales" target="_blank" rel="noopener noreferrer" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
    </div>
  </div>
</SwiperSlide>
{/* <SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project3} alt="" className='rounded-lg w-full h-48 object-cover transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>WebJump</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/MandhadapuTeja/WebJump" target="_blank" rel="noopener noreferrer" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
    </div>
  </div>
</SwiperSlide> */}

    {/* <Swiper
      slidesPerView={3} // Display three slides per view
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 3 } // Adjust for smaller screens if needed
      }}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    > */}
{/*       
      <SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project1} alt="" className='rounded-lg transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>Fake News Detection - ML</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/MandhadapuTeja/fake_news_detection" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project2} alt="" className='rounded-lg transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>Nutri Spectrum</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/MandhadapuTeja/NutriSpectrum" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
    <div className="relative">
      <img src={project3} alt="" className='rounded-lg transition-transform duration-300'></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <h3 className='text-xl my-4'>WebJump</h3>
    <div className='flex gap-3'>
      <a href="https://github.com/MandhadapuTeja/WebJump" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
    </div>
  </div> */}
{/* // </SwiperSlide> */}


      {/* <SwiperSlide>
        <div className='h-fit w-full p-4 bg-slate-700 rounded-xl  hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
          <img src={project2} alt="" className='rounded-lg'></img>
          <h3 className='text-xl my-4'>Nutri Spectrum</h3>
          <div className='flex gap-3'>
            <a href="https://github.com/MandhadapuTeja/NutriSpectrum" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-fit w-full p-4 bg-slate-700 rounded-xl  hover:scale-[1.02] hover:shadow-2xl transition-all ease-out'>
          <img src={project3} alt="" className='rounded-lg'></img>
          <h3 className='text-xl my-4'>WebJump</h3>
          <div className='flex gap-3'>
            <a href="https://github.com/MandhadapuTeja/WebJump" className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
          </div>
        </div>
      </SwiperSlide> */}
    {/* </Swiper> */}
  </div>
</div>

     
  {/* </section>  </div> */}
    
    {/* </div> */}
   </section>
  )
}

export default Project
