import React from "react";
import Image from "next/image";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { HiUserGroup } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsFillStarFill, BsBuilding } from "react-icons/bs";
import img1 from "../img/11.jpg";
import img2 from "../img/22.jpg";
import img3 from "../img/33.jpg";
import img4 from "../img/44.jpg";
import img5 from "../img/55.jpg";
import img6 from "../img/66.jpg";



function Portfolio() {
  const data = [
    {
      label: "All",
      value: "all",
      desc: <>
      <div className="mt-[4rem] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img1}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img2}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img3}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img4}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img5}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img6}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
        </div>
      </>,
    },
    {
      label: "Websites",
      value: "websites",
      desc: <>
      <div className="mt-[4rem] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img1}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img2}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img4}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
        </div>
      </>,
    },
    {
      label: "Mockup",
      value: "Mockup",
      desc: <>
      <div className="mt-[4rem] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img2}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img4}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img6}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
        </div>
      </>,
    },
    {
      label: "Design",
      value: "design",
      desc:<>
      <div className="mt-[4rem] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img2}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img3}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img4}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-[10px]">
            <Image
              src={img5}
              height={600}
              width={600}
              alt="pic1"
              className="bg-cover h-[430px] rounded-[10px] transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>
        </div>
      </>,
    },
  ];
  return (
    <section>
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
        <section id="portfolio">
        <div className="container mx-auto px-6 lg:px-[2.5rem]">
          <div className="pt-8 pb-10 flex items-center justify-center gap-1">
            <p className="h-[4px] w-[40px] bg-white rounded-full"></p>
            <h2 className="text-[2.4rem] text-center font-extrabold text-white">
              Portfolio
            </h2>
            <p className="h-[4px] w-[40px] bg-white rounded-full"></p>
          </div>

          {/* carousel button section_start */}
          <div className="flex justify-center">
            <Tabs value="all" className="max-w-full">
              <TabsHeader
                className="bg-transparent text-[1.5rem] font-semibold   text-white"
                indicatorProps={{
                  className: "bg-gray-900/10 shadow-none !text-gray-900 ",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
        </section>
        {/* ================================== */}
         {/* service small carts_start  */}

      <section className="service_bg_img w-full mt-10">
        <div className=" container mx-auto px-2 xl:px-[8rem]">
          <div className=" py-28 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {/* cart 1 start  */}
            <div className="py-10 text-center w-full bg-white shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#9925BA] rounded-full">
                    <HiUserGroup className="p-1 text-[2.5rem] text-[#9925BA] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#b61dd1]">
                  25+
                </li>
                <li className="text-[#989898] font-roboto text-[1.2rem]">
                  Active Clients
                </li>
              </ul>
            </div>

            {/* cart 2 start  */}

            <div className="py-10 text-center w-full bg-white shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className=" p-1 border-[1px] border-[#9925BA] rounded-full">
                    <IoMdCheckmarkCircle className="p-1 text-[2.5rem] text-[#9925BA] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#9925BA]">
                  120+
                </li>
                <li className="text-[#989898] font-roboto text-[1.2rem]">
                  project Complete
                </li>
              </ul>
            </div>

            {/* cart 3 start  */}

            <div className="py-10 text-center w-full bg-white shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#9925BA] rounded-full">
                    <BsFillStarFill className="p-1 text-[2.5rem] text-[#9925BA] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#9925BA]">
                  5+
                </li>
                <li className="text-[#989898] font-roboto text-[1.2rem]">
                  Client Ratting
                </li>
              </ul>
            </div>

            {/* cart 4 start  */}
            <div className="py-10 text-center w-full bg-white shadow-lg relative overflow-hidden bg-cover bg-no-repeat">
              <ul className="bg-cover transition duration-200 ease-in-out hover:scale-110">
                <li className="flex justify-center items-center ">
                  <div className="p-1 border-[1px] border-[#9925BA] rounded-full">
                    <BsBuilding className="p-1 text-[2.5rem] text-[#9925BA] " />
                  </div>
                </li>
                <li className=" text-[2rem] font-roboto font-bold text-[#9925BA]">
                  7+
                </li>
                <li className="text-[#989898] font-roboto text-[1.2rem]">
                  Total Experience
                </li>
              </ul>
            </div>
            {/* cart 4 end  */}
          </div>
        </div>
      </section>
      {/* service small carts_end  */}
        {/* ================================== */}
        <div className=" ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity={1}
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
