import React from 'react';
import propertyImg from '../../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectTemplate from '../../components/ProjectTemplate'
import ProjectTemplate2 from '../../components/ProjectT2';

const property = () => {
  return (
    <div className='w-full'>
      <ProjectTemplate2 title='Property Finder' techs='React JS / Tailwind / Firebase' img={propertyImg}/>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <ProjectTemplate 
          content='This app was built using React JS and is hosted on Firebase. Users
          are able to search properties based on an Address, City, or ZIP code
          to retrieve a list of active properties currently for sale. You will
          be able to view property information as well as the specific
          location of the property integrated with the Google Maps API. User
          authentication is available so you can signup and signin to your
          account with an email address in order to save your favorite
          properties. This is made possible with Zillow API.'
          demo ='https://property-finder-development.web.app/'
          code='https://github.com/fireclint/property-finder'/>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
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
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
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

export default property;