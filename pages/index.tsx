import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'
import NavBar from '../components/Navbar';

import React, { useState, useEffect } from 'react';
import {debounce} from '../ultilities/debounce.js';

export default function Home() {
  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-screen">
      <Head>
        <title>Seano Chang</title>
        <meta name="description" content="Sean Chang Personal Website" />
      </Head>
      <NavBar/>
      <main id="home" className="w-full">
        <Header />
        <Body />
      </main>
      <Footer/>
    </div>
  )
}
