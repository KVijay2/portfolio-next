import React from 'react';
import portfolioD from '../../public/assets/projects/portfolio-react.png'
import ProjectTemplate from '../../components/ProjectTemplate'
import ProjectTemplate2 from '../../components/ProjectT2';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const portfolioReact = () => {
    return (
      <div className='w-full'>
        <ProjectTemplate2 title='Portfolio' techs='React / SCSS / JSX / Firebase / JSON' img={portfolioD}/>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <ProjectTemplate 
            content='This appplication was built using React and is styled 
            with SCSS. The application is hosted statically using Netlify. 
            This is a mobile responsive Portfolio and features Firebase for 
            authentication. The admin may be authenticated using dashboard 
            and upload Portfolio projects and that would be stored in 
            Firebase and reflected om project. This appplication has custom
            animation, hover effect loading etc, using SCSS. A few features 
            to note with this project are lazy loading images using the Image
            component, built in routing, and Firebase Context.' 
            demo ='https://vijay-portfolio-main.netlify.app'/>
          
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React JS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> SCSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Firebase Auth
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Firebase Storage
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> JSX
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    );
  };
  
  export default portfolioReact;