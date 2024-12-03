import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
    <div className="text-center">
      <h3 className="text-4xl font-semibold">
        Hire <span className="text-cyan-600">Me</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
    </div>
    <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
    <div>
      <h2 className="text-2xl text-center font-semibold">Do you want any work from me?</h2>
      <p className="max-w-5xl text-center mt-4 text-gray-200 leading-6 justify-center">
          I'm looking for possibilities to put my love of technology and solving problems to use. I have a strong background in computer science and a strong desire to innovate. Skilled in a variety of programming languages and frameworks, I enjoy working in dynamic settings where I can learn new skills and contribute to worthwhile initiatives. I am prepared to provide my special viewpoint and abilities to your team. I have an unwavering will to succeed and a dedication to remaining on the cutting edge of technical breakthroughs. Together, let's create something amazing.

      </p>
      <button className="btn-primary mt-10">Hire Me</button>

    </div>

    </div>

    </section>
  );
};

export default Hireme;
