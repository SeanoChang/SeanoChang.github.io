import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import NavBar from '../components/Navbar';

import React, { useState } from 'react';

export default function Home() {
  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode? 'dark': ''}`} >
      <Head>
        <title>Seano Chang</title>
        <meta name="description" content="Sean Chang Personal Website" />
        <meta charSet='utf-8' />
      </Head>
      <div className="w-screen min-h-screen shadow-stone-400 text-stone-800 dark:shadow-stone-600 dark:text-stone-300 ">
        <NavBar dark={darkMode} setDark={handleDarkMode}/>
        <main id="home" className="w-full bg-stone-200  dark:bg-stone-800 pb-16">
          <Header />
          <Body />
        </main>
        <Footer/>
      </div>
    </div>
  )
}
