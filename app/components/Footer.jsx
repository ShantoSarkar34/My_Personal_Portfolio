import React from "react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { TbMailOpened } from "react-icons/tb";
import { RiUserLocationLine } from "react-icons/ri";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

function Footer() {
  return (
    <section id="footer">
      <div className="bg-[#151414] w-full pt-4 pb-10 lg:-mt-2">
        <div className="container mx-auto px-6 lg:px-[2.5rem] ">
          <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2  lg:grid-cols-3 lg:justify-items-center">
            <div className="flex items-center gap-3 lg:-ml-10">
              <FiPhoneCall className="text-[#7321B1] text-[2.5rem] lg:text-[4.5rem]" />
              <div>
                <h3 className="text-white hover:text-[#7321B1] text-[1.1rem] font-semibold lg:text-[1.3rem] cursor-pointer">
                  +880 1783-805534
                </h3>
                <p className="text-[#464B4F] font-semibold lg:text-[1.1rem]">
                  Mon-Fri 9am-6pm
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TbMailOpened className="text-[#7321B1] text-[2.5rem] lg:text-[4.5rem]" />
              <div>
                <h3 className="text-white hover:text-[#7321B1] text-[1.1rem] font-semibold lg:text-[1.3rem] cursor-pointer">
                  bytebuster9070@gmail.com
                </h3>
                <p className="text-[#464B4F] font-semibold lg:text-[1.1rem]">
                  Online support
                </p>
              </div>
            </div>
            <div className=" flex gap-3 items-center">
              <RiUserLocationLine className="text-[#7321B1] text-[2.5rem] lg:text-[4.5rem]" />
              <div>
                <h3 className="text-white hover:text-[#7321B1] text-[1.1rem] font-semibold lg:text-[1.3rem] cursor-pointer">
                  Rajshahi,Bangladesh
                </h3>
                <p className="text-[#464B4F] font-semibold lg:text-[1.1rem]">
                  Dhunat,Bogura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================================== */}
      <div className="bg-[#212121] w-full p-4">
        <div className="container mx-auto px-6 lg:px-[2.5rem] xl:px-[10rem]">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:px-[5rem]">
            <div>
              <p className="text-white text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]">
                connect with us on social media
              </p>
            </div>
            <div className="text-white py-4 flex items-center gap-4">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100074954247920&mibextid=ZbWKwL"
                }
                target="blank"
              >
                <BsFacebook className="hover:text-[#9925BA] md:text-[1.5rem]" />
              </Link>
              <Link href={"#"} target="blank">
                <BsTwitter className="hover:text-[#9925BA] md:text-[1.5rem]" />
              </Link>
              <Link href={"https://github.com/ShantoSarkar34"} target="blank">
                <BsGithub className="hover:text-[#9925BA] md:text-[1.5rem]" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/shanto9070/"}
                target="blank"
              >
                <BsLinkedin className="hover:text-[#9925BA] md:text-[1.5rem]" />
              </Link>
              <Link
                href={"https://www.instagram.com/shanto9070.me/"}
                target="blank"
              >
                <BsInstagram className="hover:text-[#9925BA] md:text-[1.5rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================= */}
      <div className="bg-[#151414] w-full py-10">
        <div className="container mx-auto px-6 lg:px-[2.5rem] xl:px-[8rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:grid-cols-6 xl:gap-1">
            {/* grid 1 */}
            <div className="text-white xl:col-span-3">
              <h2 className="text-[1.1rem] text-[#9925BA] font-bold lg:text-[2rem]">
                Byte Busters
              </h2>
              <p className="my-3 h-[3px] w-[100px] bg-[#504F4F]"></p>
              <p className="leading-[23px] text-[#b1aeae] text-[0.9rem] lg:pr-10">
                A developer and marketing company integrates technical prowess
                with strategic marketing to provide businesses with
                comprehensive digital solutions, encompassing web and app
                development, ensuring online success and growth.
              </p>
            </div>
            {/* grid 2 */}

            <div className="text-white mt-8 md:mt-0 ">
              <h2 className="text-[1.1rem] font-bold lg:text-[1.2rem]">
                Community
              </h2>
              <p className="my-3 h-[2px] w-[85px] bg-[#9925BA]"></p>
              <ul className="space-y-2 text-[#b1aeae]">
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                    target="blank"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                    target="blank"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=100074954247920&mibextid=ZbWKwL"
                    }
                    className="hover:text-[#9925BA] hover:underline"
                    target="blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                    target="blank"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                    target="blank"
                  >
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            {/* grid 3 */}

            <div className="text-white mt-8 md:mt-0 xl:-ml-10">
              <h2 className="text-[1.1rem] font-bold lg:text-[1.2rem]">
                Useful Links
              </h2>
              <p className="my-4 h-[2px] w-[85px] bg-[#9925BA]"></p>
              <ul className="space-y-2 text-[#b1aeae]">
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    create an account
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    faq?
                  </Link>
                </li>
              </ul>
            </div>

            {/* grid 4 */}

            <div className="text-white mt-8 md:mt-0 xl:-ml-10">
              <h2 className="text-[1.1rem] font-bold lg:text-[1.2rem]">
                Contact
              </h2>
              <p className="my-4 h-[2px] w-[85px] bg-[#9925BA]"></p>
              <ul className="space-y-2 text-[#b1aeae]">
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline"
                  >
                    bytebuster9070@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:text-[#9925BA] hover:underline "
                  >
                    +880 1783-805534
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-[#9925BA]  cursor-not-allowed"
                  >
                    <del>+880 1977-527672</del>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* =============================================== */}
      <div className="bg-black py-10 text-center">
        <p className="text-[#6C757D] text-[0.9rem]">
          © Copyright 2023{" "}
          <span>
            <Link
              href={"/"}
              className="text-white text-[1rem] hover:text-[#9925BA] hover:underline"
            >
              Byte Busters
            </Link>
          </span>{" "}
          | Created by{" "}
          <span>
            <Link
              href={"https://shanto9070.vercel.app/"}
              target="blank"
              className="text-white text-[1rem] hover:text-[#9925BA] hover:underline"
            >
              Shanto9070
            </Link>
          </span>
          .
        </p>
      </div>
      {/* =============================================== */}
    </section>
  );
}

export default Footer;
