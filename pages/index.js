import Head from 'next/head'
import React from 'react'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contract'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vijay | Front-End Developer</title>
        <meta name="description" content="Created by Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
