import React from "react";
import Image from "next/image";
import hero_img from "../img/hero_img.png";
import hero_image from "../img/shanto_img.png";
import hero_img_me from "../img/s2.jpg";
import hero_img_me2 from "../img/amar_kam.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero">
      <div className="w-full backgroundcolor pt-[7rem] md:pt-[12rem] xl:pt-[7rem]">
        <div className="container mx-auto px-6 lg:px-[4rem]">
          <div className="flex flex-col-reverse gap-5 items-center md:flex-row  md:justify-between lg:gap-16">
            {/* Hero section text start */}

            <div className="space-y-5 text-center md:text-start space">
              <h1 className="text-[3.5rem] leading-tight font font-extrabold text-white lg:text-[4rem]">
                Hey!, I'm <span>Shanto</span>{" "}
                <span className=" text-[#500E5B]">Sarkar</span>
              </h1>
              <p className="text-sm  text-white break-words md:text-[12px] lg:text-[18px] leading-[35px]">
              Web developers design and build websites, coding with HTML, CSS, and JavaScript to create functional and visually appealing online platforms.
              </p>
              <div className="flex justify-center md:justify-start pb-16 md:pb-0">
                <button
                  className="flex gap-4 items-center border-[1px] bg-white py-3 px-6 rounded-full
                 hover:text-white hover:bg-[#500E5B] transition-all duration-300"
                >
                  <p className="text-[1rem] font-bold">Get in Touch</p>
                  <div className="bg-[#A330EF] p-2 rounded-full">
                    <FaArrowRight className="text-[1.1rem]  text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Hero image start */}
            {/* <div>
              <Image
                src={hero_img}
                alt="Hero_image"
                height={250}
                width={250}
                className="bg-cover md:w-[40rem] lg:w-[60rem]"
              />
            </div> */}
            <div className="imgstyle transform scale-x-[-1]  md:-mt-16 lg:mt-0">
              <Image
                src={hero_img_me}
                alt="Hero_image"
                height={400}
                width={400}
                className=" bg-cover w-[30rem] md:w-[50rem] lg:w-[60rem] rotate-[10deg]"
              />
            </div>
          </div>
        </div>
        <div className=" ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity={1}
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,
            1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,
            320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
