import React from 'react';

import Chat from '../public/assets/projects/chat-app.png'
import dashboard from '../public/assets/projects/dashboard.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import notes from '../public/assets/projects/notes.png'
import portfolioD from '../public/assets/projects/portfolio-django.png'
import portfolioR from '../public/assets/projects/portfolio-react.png'
import propertyImg from '../public/assets/projects/property.jpg';
import seafil from '../public/assets/projects/searchFilter.png'
import todoD from '../public/assets/projects/todo-django.png'
import todoR from '../public/assets/projects/todo-react.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
import weather from '../public/assets/projects/weather-django.png'
import weather1 from '../public/assets/projects/weather-next.png'
import weather2 from '../public/assets/projects/weather-react.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/projects/property'
            tech='React JS'
          />

          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/projects/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/projects/twitch'
            tech='Next JS'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weather1}
            projectUrl='/projects/weather'
            tech='Next JS'
          />
          <ProjectItem
            title='Chat app'
            backgroundImg={Chat}
            projectUrl='/projects/chatapp'
            tech='React JS'
          />
          <ProjectItem
            title='Django Portfolio'
            backgroundImg={portfolioD}
            projectUrl='/projects/portfolioDjango'
            tech='Django'
          />
          <ProjectItem
            title='React Portfolio'
            backgroundImg={portfolioR}
            projectUrl='/projects/portfolioReact'
            tech='React'
          />
          <ProjectItem
            title='React Dashboard'
            backgroundImg={dashboard}
            projectUrl='https://vijay-dashboard.netlify.app'
            tech='React'
          />
          <ProjectItem
            title='Search Filter'
            backgroundImg={seafil}
            projectUrl='https://vijay-search-filter.netlify.app'
            tech='React'
          />
          <ProjectItem
            title='Todo App 2'
            backgroundImg={todoR}
            projectUrl='https://vijay-todo.netlify.app'
            tech='React'
          />
          <ProjectItem
            title='Todo App'
            backgroundImg={todoD}
            projectUrl='http://127.0.0.1:8000/'
            tech='Django'
          />
          <ProjectItem
              title='Notes App'
              backgroundImg={notes}
              projectUrl='http://127.0.0.1:4000/'
              tech='Flask'
          />
          <ProjectItem
            title='Weather Detector'
            backgroundImg={weather}
            projectUrl='http://127.0.0.1:1000/'
            tech='Django'
          />
          <ProjectItem
            title='Weather App 2'
            backgroundImg={weather2}
            projectUrl='https://vijay-weather.netlify.app'
            tech='React'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;