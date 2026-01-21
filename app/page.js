'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>  
      <CaseStudies/>
      <Publications/>
      <Contact/>
    </>
  );
}
