import React from "react";
import { ImCheckmark } from "react-icons/im";
import {FaRegPaperPlane} from "react-icons/fa"

function Contact() {
  return (
    <section id="contact">
      <div className="w-full backgroundcolor ">
        <div className=" rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity={1}
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        {/* ================================== */}

        <div className="container mx-auto px-6 lg:px-[2.5rem] ">
          <div className=" pb-10 flex items-center justify-center gap-1">
            <p className="h-[4px] w-[40px] bg-white rounded-full"></p>
            <h2 className="text-[2.4rem] text-center font-extrabold text-white">
              Get In Touch
            </h2>
            <p className="h-[4px] w-[40px] bg-white rounded-full"></p>
          </div>
          {/* carousel button section_start */}

          <div className="flex flex-col-reverse lg:flex-row-reverse shadow-lg">
            <div className=" w-full bg-[#EBC8FA] py-10">
              {/* contact input-from start  */}
              <div className="space-y-5 p-5 xl:col-span-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className=" p-2 h-[3.5rem] w-full border-2 font-roboto text-white border-[#500E5B] backgroundcolor focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className=" p-2 h-[3.5rem] w-full border-2 backgroundcolor font-roboto text-white  border-[#500E5B] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className=" p-2 h-[3.5rem] w-full border-2 backgroundcolor font-roboto text-white border-[#500E5B] focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="text"
                    placeholder="Message"
                    rows="6"
                    className=" p-2 w-full border-2 font-roboto backgroundcolor text-white border-[#500E5B] focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="text-[1rem] font-roboto border-[#500E5B] border-2 backgroundcolor
                   hover:text-white py-3 px-16 font-bold rounded-[5px] transition duration-300">
                    <div className="flex items-center gap-3">
                      <p>Send Message</p>
                      <FaRegPaperPlane className=" animate-pulse"/>

                    </div>
                  </button>
                </div>
              </div>
              </div>
              {/* contact section location form  */}
              <div className="bg-[#ebcff7] w-full p-7 py-10 shadow-lg ">
                <div>
                  <h2 className="text-[2.1rem] font-bold text-[#A031F1] md:text-[3rem]">
                    100% Satisfaction Guaranteed
                  </h2>
                  <p className="text-[0.9rem] font-semibold text-[#C52EE7] leading-[27px]">   
                  The portfolio is an essential part of a website where users can find contact information or a contact form to connect with the site owner for inquiries or collaborations.
                  </p>
                  <h3 className="text-[1.5rem] font-bold text-[#A031F1] md:text-[2rem]">
                    Waht will be the next step?
                  </h3>
                  <ul className="mt-5 space-y-2">
                    <li className="flex gap-4 items-center">
                      <ImCheckmark className="text-[#C52EE7]" />
                      <p className="text-[#A031F1] font-semibold text-[14px]">
                        Setup merchant account
                      </p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <ImCheckmark className="text-[#C52EE7]" />
                      <p className="text-[#A031F1] font-semibold text-[14px]">
                        Ad accounts connection
                      </p>
                    </li>
                    <li className="flex gap-4 items-center">
                      <ImCheckmark className="text-[#C52EE7]" />
                      <p className="text-[#A031F1] font-semibold text-[14px]">
                        50 product details
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>

          {/* contact section end  */}
        </div>
        {/* ================================== */}
        <div className=" ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#151414"
              fillOpacity={1}
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Contact;
