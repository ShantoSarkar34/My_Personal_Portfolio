"use client"
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Service from './components/Service'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { GoMoveToTop } from "react-icons/go";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Pricing/>
      <Contact/>
      <Footer/>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={1000}>
        <div className="top_icon   shadow-sm hover:shadow-md bottom-10  right-10 fixed z-50">
          <div className="  cursor-pointer animate-bounce hover:animate-none bg-[#8220CC]  bg-primary p-2 md:p-3 rounded-full">
            <GoMoveToTop className="h-6 w-6 text-white" />
          </div>
        </div>
      </Link>
    </>
  )
}
