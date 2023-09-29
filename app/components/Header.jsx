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
import logo from "../img/logo.png";
import logo2 from "../img/logo_img.png"
import {FaPhoneAlt} from "react-icons/fa"

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium transition-all duration-200  "
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
        className="p-1   font-medium "
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
        className="p-1   font-medium "
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
        className="p-1   font-medium "
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
        className="p-1   font-medium "
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
        className="p-1  font-medium "
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
      className="fixed top-0 backgroundcolor shadow-lg z-10 h-max max-w-full rounded-none py-1 container px-4 lg:px-[2.5rem]  xl:px-[4rem]"
    >
      <div className="flex items-center container mx-auto justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium  transition-all duration-200 flex items-center gap-1"
        >
          <Image
           src={logo2} 
           height={100} 
           width={125} 
           alt="logo"
           className="w-[5.2rem] md:w-28 lg:w-[8rem]"
           />
           <div className="text-center">
            <h3 className="font-bold text-[1.2rem] md:text-[1.9rem]">Byte <span className="text-[#500E5B]">Busters</span></h3>
            <p className="mt-[-4px] text-[0.6rem] lg:text-[0.8rem] lg:mt-[-5px]">Community</p>
           </div>
        </Typography>
        <div className="flex items-center">
          <div className="mr-4 hidden lg:block">{navList}</div>
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
            <div className="flex gap-3 items-center py-[0.8rem] px-9 border-[1px] border-[#500E5B] backgroundcolor rounded-full animate-pulse hover:animate-none hover:text-white  text-[#fff]  transition-all duration-200 ">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
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
