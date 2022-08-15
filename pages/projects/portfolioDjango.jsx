import React from 'react';
import portfolioD from '../../public/assets/projects/portfolio-django.png'
import ProjectTemplate from '../../components/ProjectTemplate'
import ProjectTemplate2 from '../../components/ProjectT2';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const portfolioDjango = () => {
    return (
      <div className='w-full'>
        <ProjectTemplate2 title='Portfolio' techs='Django / CSS / HTML' img={portfolioD}/>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <ProjectTemplate 
            content='This is my first project. This appplication was built using
            Django and is styled with CSS. This is a mobile responsive Portfolio 
            developed with javascript. A few features to note with this project 
            are lazy loading images using the Image component, built in routing.
            This has custom styles styled with integration of javascript with CSS' 
          />
          
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Django
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> CSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Javascript
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
  
  export default portfolioDjango;