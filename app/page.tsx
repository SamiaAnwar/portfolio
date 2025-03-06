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
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <TechStack />
      <Projects /> 
      <Experiences /> 
      <Contact /> 
      <Footer /> 
    </>
  );
}
