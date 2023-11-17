import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import service_img_1 from "../img/service-1.png";
import service_img_2 from "../img/service-2.png";
import service_img_3 from "../img/service-3.png";
import { FaPaperPlane, FaCode, FaCloudUploadAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { Typography } from "@material-tailwind/react";

function Service() {
  return (
    <section id="service">
      <div className=" bg-[#FFFF] w-full ">
        <div className="container mx-auto px-6 lg:px-[2.5rem] xl:px-[5rem] pb-10">
          <div className="py-10 flex items-center justify-center gap-1">
            <p className="h-[4px] w-[40px] bg-[#D02DE5] rounded-full"></p>
            <h2 className="text-[2.4rem] text-center font-extrabold text-[#212529]">
              Our Services
            </h2>
            <p className="h-[4px] w-[40px] bg-[#A231F0] rounded-full"></p>
          </div>

          {/* service section text header start  */}
          <div className="flex flex-col gap-4 justify-between md:flex-row ">
            <div className=" md:w-[80rem]">
              <h2 className="text-[1.5rem] font-semibold text-[#212529] text-center lg:text-[1.8rem] ">
                Our Services Range From Initial Design To Deployment Anywhere
                Anytime
              </h2>
            </div>
            <p className=" h-[10rem] w-[1px] bg-[#6F7275] hidden md:block lg:h-[8rem]"></p>
            <div>
              <p className="px-2 text-[#6F7275] text-[1rem] leading-[25px] font-sans">
              Developer and marketing services combine technical expertise with strategic promotion. They offer web development, app creation, and marketing strategies to help businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
          <p className="mt-5 h-[2px] w-full backgroundcolor "></p>

          {/* service section Marketing section start  */}

        <div className="pt-10 flex flex-col md:flex-row-reverse md:gap-6 ">
            <div>
              <Image
                src={service_img_1}
                alt="sevice-logo-1"
                height={400}
                width={450}
                className="md:w-[50rem] lg:w-[80rem]"
              />
            </div>
            <div className="mt-5 lg:mt-20">
              <FaPaperPlane className="text-[#9926F0] text-[1.4rem] lg:text-[2rem]" />
              <h3 className="py-2 text-[1.1rem] font-bold text-[#B52FEC] lg:text-[2rem]">
                Marketing
              </h3>
              <p className="text-[0.8rem] text-[#212529] lg:text-[1.1rem]">
              Marketing is the strategic practice of promoting products or services to a target audience through advertising, research, and communication, with the goal of attracting customers and achieving business objectives.
              </p>
              <div className="py-5 flex">
                <button className="flex gap-4 items-center border-[1px] border-[#A034F1] bg-white py-2 px-4 rounded-full hover:text-white hover:bg-[#500E5B] transition-all duration-300">
                  <p className="text-[1rem] font-bold">Learn more</p>
                  <div className="bg-[#A330EF] p-2 rounded-full">
                    <FaArrowRight className="text-[1.1rem]  text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

           {/* Web developmtnt section start  */}

           <div className="pt-10 flex flex-col md:flex-row md:gap-6 lg:gap-10">
            <div>
              <Image
                src={service_img_2}
                alt="sevice-logo-1"
                height={400}
                width={450}
                className="md:w-[50rem] lg:w-[80rem]"
              />
            </div>
            <div className="">
              <div className="mt-5 lg:mt-20">
                <div className="">
              <FaCode className="text-[#9926F0] text-[1.4rem] lg:text-[2rem]"/>
                </div>
              <h3 className="py-2 text-[1.1rem] font-bold text-[#B52FEC] lg:text-[2rem]">
              Web Development
              </h3>
              <p className="text-[0.8rem] text-[#212529] lg:text-[1.1rem]">
              
              Development denotes progress and improvement, encompassing economic, social, and personal aspects. It involves enhancing infrastructure, education, and living standards for a better quality of life and sustainable growth.
              </p>
              <div className="py-5 ">
                <button className="flex gap-4 items-center border-[1px] border-[#A034F1] bg-white py-2 px-4 rounded-full hover:text-white hover:bg-[#500E5B] transition-all duration-300">
                  <p className="text-[1rem] font-bold">Learn more</p>
                  <div className="bg-[#A330EF] p-2 rounded-full">
                    <FaArrowRight className="text-[1.1rem]  text-white" />
                  </div>
                </button>
              </div>
              </div>
            </div>
          </div>

           {/* cloud hosting section start  */}

           <div className="pt-10 flex flex-col md:flex-row-reverse md:gap-6 ">
            <div>
              <Image
                src={service_img_3}
                alt="sevice-logo-1"
                height={400}
                width={450}
                className="md:w-[50rem] lg:w-[80rem]"
              />
            </div>
            <div className="mt-5 lg:mt-20">
              <FaCloudUploadAlt className="text-[#9926F0] text-[1.4rem] lg:text-[2rem]" />
              <h3 className="py-2 text-[1.1rem] font-bold text-[#B52FEC] lg:text-[2rem]">
                Cloud Hosting
              </h3>
              <p className="text-[0.8rem] text-[#212529] lg:text-[1.1rem]">
              Cloud hosting is a modern web hosting solution that stores website data and applications on remote servers, offering scalability, flexibility, and cost-efficiency while ensuring reliable access and data security.
              </p>
              <div className="py-5 flex">
                <button className="flex gap-4 items-center border-[1px] border-[#A034F1] bg-white py-2 px-4 rounded-full hover:text-white hover:bg-[#500E5B] transition-all duration-300">
                  <p className="text-[1rem] font-bold">Learn more</p>
                  <div className="bg-[#A330EF] p-2 rounded-full">
                    <FaArrowRight className="text-[1.1rem]  text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
            {/* ====================================== */}
            {/* hire me section start */}

            <section className="hire_bg_img w-full">
        <div className=" py-[5rem]">
          <div className="text-center font-semibold text-white text-[1.3rem] md:text-[1.9rem]">
              Any Project On Your Mind?
          </div>
          <div className="flex gap-x-2 md:gap-5 justify-center flex-wrap">
            <div>
              <button
                className=" flex backgroundcolor2
               transition-all duration-300  font-semibold  py-[.9rem] px-[2rem] hover:text-black
                shadow-sm  space-x-2 items-center text-white mt-10 rounded-full"
              >
                <TiMail className="text-[1.4rem]" />
                <p>Hire Me</p>
              </button>
            </div>
            <div>
              <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset based on your layout
              duration={500}
              className=" flex flex-row-reverse gap-2 backgroundcolor2 
                 hover:text-white transition-all duration-300
                 font-semibold  py-[.9rem] px-[2rem] shadow-sm  space-x-2 items-center
                  text-primary mt-10 rounded-full cursor-pointer"
              >
                <FaArrowRight className="h-5 w-5" />
                <p>Social Media Link</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* hire me section end */}
      {/* ====================================== */}
    </section>
  );
}

export default Service;
