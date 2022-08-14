import React from 'react';

const ProjectTemplate = ({content,code,demo})=>{
    return(
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>{content}</p>
          <a
            href={code}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
    )
}

export default ProjectTemplate;