import React, { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setDropdown(false);
    navigate("/");
  };
  function handleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <>
      <div className="flex w-full justify-between header-blur z-50 fixed top-0 items-center sm:px-[48px] px-[14px] bg-[#19171740] py-[12px] h-[70px]">
        <Link to="/">
          <img src="/assets/home/logo.webp" alt="" />
        </Link>
        <div className="flex gap-[24px] items-center">
          {/* <button
            style={{ fontFamily: "Satoshi" }}
            className="sm:flex hidden font-[700] text-[16px] leading-[21.6px] text-[#FFFFFF] items-center bg-[#2E313A] px-[16px] py-[12px] rounded-[16px] gap-[8px]"
          >
            <img src="/assets/home/active.webp" alt="" />
            Hire Me
            <img src="/assets/home/down-arrow.webp" alt="" />
          </button> */}
          <button onClick={() => handleDropdown()}>
            <img src="/assets/home/bras.webp" alt="" />
          </button>
        </div>
      </div>
      <div
        className={`fixed right-0 left-0 navbar-item bg-[#4B009699] duration-300 ease-in ${
          dropdown ? "top-[0px] sm:h-[685px] h-auto" : "top-[-810px] h-[0px]"
        }`}
      >
        <div className="flex items-center justify-between py-[12px]">
          <Link to="/">
            <img src="/assets/home/logo.webp" alt="" />
          </Link>
          <div className="flex gap-[24px] items-center py-[7px]">
            <button
              style={{ fontFamily: "Satoshi" }}
              className="font-[400] flex gap-[16px] items-center sm:text-[24px] text-[16px] sm:leading-[33.6px] leading-[24px] text-[#FFFFFF]"
              onClick={() => handleDropdown()}
            >
              Close
              <img
                src="/assets/close.svg"
                className="sm:h-[24px] h-[16px] sm:w-[24px] w-[16px]"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[88px] gap-[40px] sm:mt-[56px] mt-[20px]">
          <div className="flex flex-col sm:gap-[24px] gap-[14px]">
            <Link
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[#FFFFFF] text-clash font-[700] sm:text-[42px] text-[24px] sm:leading-[58.8px] leading-[40px]"
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[#FFFFFF] text-clash font-[400] sm:text-[42px] text-[24px] sm:leading-[58.8px] leading-[40px]"
              to="/"
            >
              Work
            </Link>
            <Link
              style={{ fontFamily: "ClashDisplay" }}
              className="text-[#FFFFFF] text-clash font-[400] sm:text-[42px] text-[24px] sm:leading-[58.8px] leading-[40px]"
              to="/"
            >
              Blog
            </Link>
            <Link
              style={{ fontFamily: "ClashDisplay" }}
              className="flex items-center gap-5 cursor-not-allowed text-[#FFFFFF] text-clash font-[400] sm:text-[42px] text-[24px] sm:leading-[58.8px] leading-[40px]"
              to="/"
            >
              About Me
              <img src="/assets/coming-soon-tag.svg" alt="home3" className={`h-10`} />
            </Link>
          </div>
          <div>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="uppercase font-[500] text-[16px] leading-[20.8px] text-[#FFFFFF] pb-[16px]"
            >
              Let’s Connect...
            </p>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[400] sm:text-[42px] text-[30px] sm:leading-[54.6px] leading-[40px] text-[#FFFFFF] sm:pb-[32px] pb-[20px]"
            >
              How Can I Help You?
            </p>
            <button
              style={{ fontFamily: "Satoshi" }}
              className="flex sm:py-[15px] py-[10px] sm:px-[30px] px-[16px] rounded-[24px] border border-[#FFFFFF] text-[#FFFFFF] font-[700] text-[13.5px] leading-[18.23px] items-center gap-[8px] transition-colors duration-300 hover:text-[#17181E] hover-fill-animation"
            >
              <a
                href="/assets/pdf/Mihir Vaidya UX Designer CV.pdf"
                download
                className="flex items-center justify-center"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Download Resume
                <img
                  className="ml-[10px]"
                  src="/assets/home/right-arrow.webp"
                  alt=""
                />
              </a>
            </button>
            <button
              onClick={openModal1}
              style={{ fontFamily: "Satoshi" }}
              className="flex sm:py-[15px] py-[10px] sm:px-[30px] px-[16px] sm:mt-[24px] mt-[16px] rounded-[24px] border border-[#FFFFFF] text-[#FFFFFF] font-[700] text-[13.5px] leading-[18.23px] items-center gap-[8px] transition-colors duration-300 hover:text-[#17181E] hover-fill-animation"
            >
              Contact ME!
              <img src="/assets/home/right-arrow.webp" alt="" />
            </button>
          </div>
        </div>
        {/* <div
          className={`flexitems-start px-[14px] flex-col`}
        >
          <Link className="text-[#FFF]" to="/">
            Home
          </Link>
          <Link className="text-[#FFF]" to="/indulekha">
            Indulekha
          </Link>
          <Link className="text-[#FFF]" to="/tech">
            Tech
          </Link>
        </div> */}
        {isOpen1 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#17181E] rounded-[42px] shadow-lg max-w-[1130px] w-full">
              <div className="py-[32px] px-[42px] flex items-center justify-between">
                <h1 className="relative font-[ClashDisplay] text-[#FFFFFF] text-[32px] leading-[44px]">
                  Contact ME{" "}
                  <img
                    className="absolute left-[171px] top-[50%] translate-y-[-50%]"
                    src="/assets/Chat.webp"
                    alt=""
                  />
                </h1>
                <button
                  onClick={closeModal1}
                  className="font-[Satoshi] font-[400] text-[24px] leading-[34px] text-[#FFFFFF]"
                >
                  Close
                </button>
              </div>
              <div className="border-b-[0.5px] border-[#1D2939]"></div>
              <div className="p-[42px]">
                <div className="grid sm:grid-cols-6 grid-cols-1 sm:gap-[62px] gap-0">
                  <div className="col-span-2">
                    <div className="sm:p-[42px] p-[12px]">
                      <h6 className="font-[ClashDisplay] text-[#FFFFFF] text-[24px] leading-[33.6px]">
                        Drop on
                      </h6>
                      <div className="flex items-center pb-[32px] gap-[16px] pt-[42px]">
                        <img src="/assets/whatsapp-icon.webp" alt="" />
                        <p className="font-[ClashDisplay] text-[#FFFFFF] text-[24px] leading-[33.6px]">
                          +91 9993853673
                        </p>
                      </div>
                      <div className="flex items-center gap-[16px]">
                        <img src="/assets/mail-logo.webp" alt="" />
                        <p className="font-[ClashDisplay] text-[#FFFFFF] text-[24px] leading-[33.6px]">
                          mihirvaidya.desing@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex hidden flex-col items-center gap-[8px]">
                    <div className="border-l max-h-[204px] h-full border-[#2B304A] "></div>
                    <h6 className="text-[#AEB2BE] font-[Satoshi] font-[700] text-[16px] leading-[22px] text-center">
                      OR
                    </h6>
                    <div className="border-l max-h-[204px] h-full border-[#2B304A] "></div>
                  </div>
                  <div className="col-span-3 sm:pr-[42px] pr-[12px] sm:py-[42px] py-[12px]">
                    <h6 className="font-[ClashDisplay] text-[#FFFFFF] text-[24px] pb-[32px] leading-[33.6px]">
                      Send your message
                    </h6>
                    <input
                      type="text"
                      className="border border-[#7E7B92] bg-transparent font-[Satoshi] font-[700] text-[14px] leading-[18px] text-[#FFFFFF] py-[15px] px-[16px] mb-[24px] rounded-[24px] w-full"
                      placeholder="Email ID"
                    />
                    <textarea
                      name=""
                      id=""
                      className="border border-[#7E7B92] bg-transparent font-[Satoshi] font-[700] text-[14px] leading-[18px] text-[#FFFFFF] py-[15px] px-[16px] rounded-[24px] mb-[24px] w-full"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                    <div className="flex justify-end">
                      <button
                        onClick={openModal2}
                        className="bg-[#FFFFFF] border rounded-[24px] px-[16px] py-[12px] font-[Satoshi] font-[700] text-[14px] leading-[18.23px] text-center border-[#000000]"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isOpen2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#17181E] rounded-[42px] shadow-lg max-w-[1130px] w-full">
              <div className="py-[42px] px-[42px] flex items-center justify-center flex-col">
                <h1 className="font-[ClashDisplay] pb-[16px] text-center text-[#FFFFFF] font-[600] text-[42px] leading-[58px]">
                  "You Did It! You Actually Did It!"
                </h1>
                <p className="font-[Satoshi] font-[400] italic text-[24px] leading-[33.6px] text-[#FFFFFF] pb-[32px] text-center">
                  Thanks for reaching out, best buddy (or future best buddy, who
                  knows?).
                </p>
                <p className="font-[Satoshi] font-[500] text-[24px] leading-[34px] text-center text-[#FFFFFF]">
                  Big moves. Huge. While you’re already here, why not take a
                  stroll through my work? It’s like a treasure hunt—except
                  instead of gold, you find amazing designs (and maybe a little
                  piece of my heart).
                </p>
                <button
                  onClick={closeModal2}
                  className="bg-[#FFFFFF] border rounded-[24px] mt-[32px] px-[16px] py-[12px] font-[Satoshi] font-[700] text-[14px] leading-[18.23px] text-center border-[#000000]"
                >
                  See My Work
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
