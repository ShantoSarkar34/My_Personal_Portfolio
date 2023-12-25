import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import logo from "../img/LOGO-IMG.png";
import logo2 from "../img/byte_buster_logo.png"
import {FaPhoneAlt} from "react-icons/fa"
import {GiHamburgerMenu,GiCrossedSwords} from "react-icons/gi"



export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="py-3 font-medium transition-all duration-200 border-b-[1px] lg:border-none "
      >
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset based on your layout
          duration={500}
         className="flex text-[1.1rem] items-center text-white cursor-pointer tracking-[1px]">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 font-medium border-b-[1px] lg:border-none"
      >
        <Link
         activeClass="active"
         to="about"
         spy={true}
         smooth={true}
         offset={-70} // Adjust this offset based on your layout
         duration={500} 
         className="flex items-center text-[1.1rem] cursor-pointer tracking-[1px] text-[#EBC8FA] hover:text-white transition-all duration-200">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 font-medium border-b-[1px] lg:border-none"
      >
        <Link
         activeClass="active"
         to="service"
         spy={true}
         smooth={true}
         offset={-70} // Adjust this offset based on your layout
         duration={500} 
         className="flex items-center text-[1.1rem] cursor-pointer tracking-[1px] text-[#EBC8FA] hover:text-white transition-all duration-200">
          Service
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 font-medium border-b-[1px] lg:border-none"
      >
        <Link
         activeClass="active"
         to="portfolio"
         spy={true}
         smooth={true}
         offset={-70} // Adjust this offset based on your layout
         duration={500} 
         className="flex items-center text-[1.1rem] cursor-pointer tracking-[1px] text-[#EBC8FA] hover:text-white transition-all duration-200">
          Portfolio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 font-medium border-b-[1px] lg:border-none"
      >
        <Link
         activeClass="active"
         to="pricing"
         spy={true}
         smooth={true}
         offset={-70} // Adjust this offset based on your layout
         duration={500} 
         className="flex items-center text-[1.1rem] cursor-pointer tracking-[1px] text-[#EBC8FA] hover:text-white transition-all duration-200">
          Pricing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 font-medium border-b-[1px] lg:border-none"
      >
        <Link
         activeClass="active"
         to="contact"
         spy={true}
         smooth={true}
         offset={-70} // Adjust this offset based on your layout
         duration={500} 
         className="flex items-center text-[1.1rem] cursor-pointer tracking-[1px] text-[#EBC8FA] hover:text-white transition-all duration-200">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className="fixed top-0 backgroundcolor shadow-lg z-10 h-max max-w-full rounded-none py-1 container px-4 lg:px-[2.5rem]  xl:px-[5.7rem]"
    >
      <div className="flex items-center container mx-auto justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer font-medium  transition-all duration-200 flex items-center"
        >
          <Image
           src={logo} 
           height={80} 
           width={60} 
           alt="logo"
           className="lg:w-16 rotate-6"
           />
           <div className="text-center">
            <h3 className="font-bold text-[1.2rem] md:text-[1.5rem]">Byte <span className="text-[#500E5B]">Busters</span></h3>
            <p className="mt-[-4px] text-start text-[0.6rem] lg:text-[0.8rem] lg:mt-[-5px]">Community</p>
           </div>
        </Typography>
        <div className="flex items-center">
          <div className="mr-4 hidden lg:block lg:pr-28">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
            <div className="flex gap-3 items-center py-[0.7rem] px-8 border-[1px] border-[#500E5B] backgroundcolor rounded-[10px] animate-pulse hover:animate-none hover:text-white  text-[#fff]  transition-all duration-200 ">
            <p className="text-[1rem] font-bold">Buy Now</p>
            <div className="p-2 bg-[#500E5B] rounded-full animate-pulse">
            <FaPhoneAlt className="text-[1.1rem] text-white"/>
            </div>
           </div>

            </Link>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <GiCrossedSwords className="text-white text-2xl"/>
              
            ) : (
              <GiHamburgerMenu className="text-white text-2xl"/>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span className="flex flex-col">
            <p className="text-black font-semibold">Contact Me</p>
            <p>+880 1783805534</p>
          </span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
