import React from "react";
import Image from "next/image";
import Link from "next/link";


function About() {
  return (
    <section id="about">
      <div className=" bg-[#FFFF] w-full -mt-4">
        <div className="container mx-auto px-6 lg:px-[2.5rem]">
          <div className=" md:p-4 xl:p-8">
          <div className="pb-16 flex items-center justify-center gap-1">
              <p className="h-[4px] w-[40px] bg-[#D02DE5] rounded-full"></p>
              <h2 className="text-[2.4rem] text-center font-extrabold text-[#212529]">About Me</h2>
              <p className="h-[4px] w-[40px] bg-[#A231F0] rounded-full"></p>
            </div>
            {/* Expertise section start */}
            <div className=" grid gap-5 grid-cols-1 xl:grid-cols-2 xl:gap-8 ">
              {/* flex 1 section  */}
              <div>
                <div>
                  <h3 className=" text-sm  md:text-lg text-[#500E5B] ">
                    My Expertise
                  </h3>
                  <span className="border-b-2 mb-2 w-[4rem] block border-[#CE2DE6] "></span>
                  <h2 className=" text-2xl md:text-3xl  font-semibold text-[#061526]">
                    {" "}
                    My Skills
                  </h2>
                </div>
                <div>
                  {/* progress bar 1 start*/}

                  <div className="py-1">
                    <div className=" py-4 flex justify-between">
                      <p className=" text-[14px] text-[#6b6b6b] font-semibold">
                        Web Design
                      </p>
                    </div>
                    <div className="h-[25px] w-full bg-[#F6F5FF] ">
                      <div className=" h-full w-[90%] backgroundcolor">
                        <p className="text-end font-semibold text-white pr-2 ">
                          90%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* progress bar 2 start*/}

                  <div className="py-1">
                    <div className=" flex justify-between ">
                      <p className="py-4 text-[14px] text-[#6b6b6b] font-semibold">
                        Web Development
                      </p>
                    </div>
                    <div className="h-[25px] w-full bg-[#F6F5FF] ">
                      <div className=" h-full w-[70%] backgroundcolor">
                        <p className="text-end font-semibold text-white pr-2">
                          70%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* progress bar 3 start*/}

                  <div className="py-1">
                    <div className=" flex justify-between ">
                      <p className="py-4 text-[14px] text-[#6b6b6b] font-semibold">
                      Communication skills
                      </p>
                    </div>
                    <div className="h-[25px] w-full bg-[#F6F5FF] ">
                      <div className=" h-full w-[85%] backgroundcolor">
                        <p className="text-end font-semibold text-white pr-2">
                          85%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* progress bar 4 start*/}

                  <div>
                    <div className=" flex justify-between">
                      <p className="py-4 text-[14px] text-[#6b6b6b] font-semibold">
                        Project Analyais
                      </p>
                    </div>
                    <div className="h-[25px] w-full bg-[#F6F5FF] ">
                      <div className=" h-full w-[65%] backgroundcolor">
                        <p className="text-end font-semibold text-white pr-2">
                          65%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* progress bar 5 start*/}
                  <div>
                    <div className=" flex justify-between">
                      <p className="py-4 text-[14px] text-[#6b6b6b] font-semibold">
                        Social Media Marketing
                      </p>
                    </div>
                    <div className="h-[25px] w-full bg-[#F6F5FF] ">
                      <div className=" h-full w-[75%] backgroundcolor">
                        <p className="text-end font-semibold text-white pr-2">
                          75%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* progress bar end  */}
                </div>
              </div>
              {/* flex 2 section  */}
              <div>
                <div className=" mt-10 xl:mt-0 ">
                  <h3 className=" text-sm md:text-lg text-[#500E5B] ">
                    My Information
                  </h3>
                  <span className="border-b-2 w-[4rem] block border-[#CE2DE6] "></span>
                  <h2 className="text-2xl md:text-3xl  font-semibold text-[#061526] py-4">
                    {" "}
                    Let Me Know
                  </h2>
                </div>

                {/* information_section_start */}

                <div className="">
                  <h2 className="  text-[#5f2968] text-[1.1rem] leading-[30px]">
                    Hi! My name is{" "}
                    <span className="font-semibold text-[#500E5B] hover:text-[#9925BA] italic">
                      Shanto Sarkar
                    </span>
                    . I am a Web Developer, and I'm very passionate and
                    dedicated to my work. With 05 years experience as a
                    professional Web developer, I have acquired the skills and
                    knowledge necessary to make your project a success.
                  </h2>
                </div>
                <div className="py-8  flex items-center md:justify-center flex-col md:flex-row lg:justify-start">
                  <div className="border-2 w-full md:w-none border-[#CE2DE6] py-3 px-4 rounded-t-[10px] border-b-0 md:rounded-l-[10px] md:p-8 md:rounded-r-none md:border-b-2 lg:p-4 2xl:pr-28">
                    <ul className="space-y-2">
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Name
                      </li>
                      <li className="text-[1.1rem]">Shanto Sarkar</li>
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Email
                      </li>
                      <li className="text-[1.1rem]">
                        shantomr33@gmail.com
                      </li>
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Phone
                      </li>
                      <li className="text-[1.1rem]">+880 1783-805534</li>
                    </ul>
                  </div>
                  <div className="-mt-[1px] border-2 w-full border-[#CE2DE6] py-3 px-4 rounded-b-[10px] md:rounded-r-[10px] md:-ml-[1.5px] md:p-8 md:rounded-l-none md:mt-0 border-t-0 md:border-t-2
                  lg:p-4 2xl:pr-20">
                    <ul className="space-y-2">
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Address
                      </li>
                      <li className="text-[1.1rem]">
                       Dhunat,Bogura,Rajshahi.
                      </li>
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Degree
                      </li>
                      <li className="text-[1.1rem]">Intermediate</li>
                      <li className="text-[1.2rem] font-semibold text-[#500E5B]">
                        Freelance
                      </li>
                      <li className="text-[1.1rem]">Available</li>
                    </ul>
                  </div>
                </div>

                {/* information_section_end */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
