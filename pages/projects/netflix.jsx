import React from 'react';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectTemplate from '../../components/ProjectTemplate';
import ProjectTemplate2 from '../../components/ProjectT2';

const netflix = () => {
  return (
    <div className='w-full'>
      <ProjectTemplate2 title='Netflix App' techs='React JS / Tailwind / Firebase' img={netflixImg}/>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <ProjectTemplate 
        content='I built this application in React JS and is hosted on GitHub pages.
        This app features user authentication with firebase as well as the
        firestore cloud storage database. This application is pulling movie
        data from an the IMDB movie API and displaying different categories.
        It features horizontal sliding and a featured selection. The
        useContext hook is also being implemented for app-wide state
        management.'
        code='https://github.com/fireclint/netflix-react-tailwind'
        demo='https://fireclint.github.io/netflix-react-tailwind/' />
        
        <div className={style.main}>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IMDB API
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

export default netflix;