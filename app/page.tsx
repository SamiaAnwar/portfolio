'use client'
import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header"; 
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <TechStack />
    </>
  );
}
