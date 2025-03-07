'use client'
import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header"; 
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experiences } from "./components/Experiences";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  }, [isDarkMode])

  const handleSetDark = () => {
    if (isDarkMode) {
        setIsDarkMode(false)
    } else {
        setIsDarkMode(true)
    }
}

  return (
    <>
      <NavBar isDarkMode={ isDarkMode } handleSetDark={ handleSetDark }/>
      <Header isDarkMode={ isDarkMode }/>
      <About/>
      <TechStack isDarkMode={ isDarkMode }/>
      <Projects isDarkMode={ isDarkMode }/> 
      <Experiences isDarkMode={ isDarkMode }/> 
      <Contact isDarkMode={ isDarkMode }/> 
    </>
  );
}
