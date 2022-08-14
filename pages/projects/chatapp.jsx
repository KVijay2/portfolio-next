import React from 'react';
import Chat from '../../public/assets/projects/chat-app.png'
import ProjectTemplate from '../../components/ProjectTemplate'
import ProjectTemplate2 from '../../components/ProjectT2';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const portfolioDjango = () => {
    return (
      <div className='w-full'>
        <ProjectTemplate2 title='Portfolio' techs='Django / CSS / HTML' img={Chat}/>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <ProjectTemplate 
            content='This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.' 
            code ='https://github.com/fireclint/twitch-nextjs-tailwind' 
            demo ='https://twitch-nextjs-tailwind.vercel.app/'/>
          
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next.JS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Javascript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next Auth
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Github Auth
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Google Auth
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