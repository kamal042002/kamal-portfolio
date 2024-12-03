// import React from 'react'
// import powerbi from '../assets/images/Microsoft-Power-BI-Logotipo-2016-2020.jpg';
// const Skills = () => {
//   const skills =[
//     {
//       logo:'logo-<a href="https://www.flaticon.com/free-icons/microsoft"</a>',
//       level:'POWER BI',
//       count:86
//     },
//     {
//       logo:'logo-Python',
//       level:'PYTHON',
//       count:60
//     },
//     {
//       logo:'https://www.flaticon.com/free-icons/mysql',
//       logo:'logo-',
//       level:'MySQL',
//       count:70
//     },
//     {
//       logo:'logo-Tableau',
//       level:'TABLEAU',
//       count:80
//     },
//     {
//       logo:'logo-< href="https://www.flaticon.com/free-icons/excel>',
//       level:'EXCEL',
//       count:40
//     },
    

//   ]
//   return (
//   <section id="skills" className='py-10 bg-gray-800 relative'>
//   <div className='mt-8 text-gray-100 text-center'>
//   <h3 className='text-4xl font-semibold'>
//     My <span className='text-cyan-600'>Skills</span>
//   </h3>
//   <p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
//     <div className='flex items-center justify-center mt-12 gap-10 flex-wrap '>
//     {
//       skills?.map((skill,i)=>(
//         <div key={i} className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:translate-y-[0.2rem] hover:shadow-2xl transition-all ease-out '>
//       <div style={{
//         background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
//       }} 
//       className='w-32 h-32 flex items-center justify-center rounded-full'>
//       <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
//         <ion-icon name={skill.logo}></ion-icon>

//       </div>
//       </div>
//       <p className='text-xl mt-3'>{skill.level}</p>

//       </div>
//       ))
//     }
      
//     </div>
//   </div>
//   </section>
//   )
// };

// export default Skills


// import React from 'react';
// import powerbi from '../assets/images/Microsoft-Power-BI-Logotipo-2016-2020.jpg'; // Example local image
// import excel from '../assets/images/excel-logo-1.png';
// import mysql from '../assets/images/mysql_PNG35.png';
// import tableau from '../assets/images/tableau.jpeg';
// const Skills = () => {
//   const skills = [
//     {
//       logo: powerbi, // Local image import for Power BI
//       level: 'POWER BI',
//       count: 86,
//     },
//     {
//       logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', // Python logo URL
//       level: 'PYTHON',
//       count: 60,
//     },
//     {
//       logo: 'mysql', // MySQL logo URL
//       level: 'MySQL',
//       count: 70,
//     },
//     {
//       logo: 'tableau',//'https://upload.wikimedia.org/wikipedia/commons/4/4f/Tableau_Logo.png', // Tableau logo URL
//       level: 'TABLEAU',
//       count: 80,
//     },
//     {
//       logo: 'excel',//'https://www.flaticon.com/free-icons/excel', // Excel logo URL
//       level: 'EXCEL',
//       count: 40,
//     },
//   ];

//   return (
//     <section id="skills" className="py-10 bg-gray-800 relative">
//       <div className="mt-8 text-gray-100 text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Skills</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
//         <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:translate-y-[0.2rem] hover:shadow-2xl transition-all ease-out"
//             >
//               <div
//                 style={{
//                   background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
//                 }}
//                 className="w-32 h-32 flex items-center justify-center rounded-full"
//               >
//                 <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
//                   <img
//                     src={skill.logo}
//                     alt={`${skill.level} logo`}
//                     className="w-20 h-20 object-contain rounded-full"
//                   />
//                 </div>
//               </div>
//               <p className="text-xl mt-3">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import powerbi from '../assets/images/Microsoft-Power-BI-Logotipo-2016-2020.jpg'; // Example local image
import excel from '../assets/images/excel-logo-1.png'; // Local Excel logo
import mysql from '../assets/images/mysql_PNG35.png'; // Local MySQL logo
import tableau from '../assets/images/tableau.jpeg'; // Local Tableau logo

const Skills = () => {
  const skills = [
    {
      logo: powerbi, // Local image import for Power BI
      level: 'POWER BI',
      count: 86,
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', // Python logo URL
      level: 'PYTHON',
      count: 60,
    },
    {
      logo: mysql, // Local MySQL image
      level: 'MySQL',
      count: 70,
    },
    {
      logo: tableau, // Local Tableau image
      level: 'TABLEAU',
      count: 80,
    },
    {
      logo: excel, // Local Excel image
      level: 'EXCEL',
      count: 90,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:translate-y-[0.2rem] hover:shadow-2xl transition-all ease-out"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img
                    src={skill.logo}
                    alt={`${skill.level} logo`}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
