import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

function Indulekha() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="sm:px-[48px] px-[20px] overflow-hidden pt-[70px] bg-[#16161A]">
        <div className="flex flex-col sm:py-[110px] py-[50px] justify-center items-center">
          <div className="flex items-center mb-[26px] gap-[14px]">
            <img src="/assets/id/item1.png" alt="" />
            <div className="h-[20px] w-[1px] bg-[#FFFFFF]"></div>
            <img src="/assets/id/item2.png" alt="" />
          </div>
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="relative z-20 font-[400] max-w-[1300px] w-full text-center sm:text-[80px] text-[32px] leading-[39.36px] sm:leading-[98.4px] text-[#FFFFFF]"
          >
            <img
              src="/assets/id/wrap1.svg"
              className="absolute left-[50%] sm:h-auto h-[50px] translate-x-[-50%] z-[-1]"
              alt=""
            />
            Elevating <span className="text-[#5c5124]"> Indulekha’s </span>
            Digital Presence
          </p>
        </div>
        <div className="flex pt-[28px] sm:flex-row flex-col overflow-hidden sm:h-[412px] h-auto justify-center items-center">
          <img src="/assets/id/item3.png" className="sm:mt-[93px] mt-0" alt="" />
          <img src="/assets/id/item3.png" className="sm:mt-[28px] mt-0" alt="" />
          <img src="/assets/id/item3.png" className="sm:mt-[93px] mt-0" alt="" />
        </div>
        <div className="sm:py-[120px] py-[50px] sm:px-[22px] px-0">
          <div className="relative sm:mb-[92px] mb-[32px] z-10">
            <img
              src="/assets/id/wrap2.svg"
              className="absolute left-[50%] h-[40px] sm:h-[80px] top-[-6px] sm:top-[-10px] translate-x-[-50%] z-[-1]"
              alt=""
            />
            <h6
              style={{ fontFamily: "ClashDisplay" }}
              className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] pb-[20px] text-center text-[#D0AD2A]"
            >
              About Project
            </h6>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[24px] text-[12px] text-center max-w-[693px] w-full m-auto font-[400] sm:leading-[36px] leading-[16.2px] text-[#FFFFFF]"
            >
              India’s most trusted haircare brand, owned by Hindustan Unilever.
              Indulekha perfectly address hairfall at the root using centuries
              of Ayurvedic wisdom, and proven by clinical evidence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] sm:gap-[130px]">
            <div className="flex flex-row items-start sm:gap-[34px] gap-[8px]">
              <img
                src="/assets/id/icon1.svg"
                className="sm:w-auto sm:m-auto w-[21.13px] h-[21.13px]"
                alt=""
              />
              <div className="flex flex-col items-start sm:gap-[18px] gap-[5px]">
                <p
                  style={{ fontFamily: "ClashDisplay" }}
                  className="font-[600] sm:text-left text-center sm:text-[24px] text-[14px] sm:leading-[24px] leading-[17.22px] text-[#FFFFFF]"
                >
                  Vision
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="font-[400] text-left sm:text-[20px] text-[12px] sm:leading-[32px] leading-[16.2px] opacity-[0.7] text-[#FFFFFF]"
                >
                  Vision is to be a trusted global leader in natural hair care
                  empowering individuals to achieve their hair health goals
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start sm:gap-[34px] gap-[8px]">
              <img
                  src="/assets/id/icon2.svg"
                className="sm:w-auto sm:m-auto w-[21.13px] h-[21.13px]"
                alt=""
              />
              <div className="flex flex-col items-start sm:gap-[18px] gap-[5px]">
                <p
                  style={{ fontFamily: "ClashDisplay" }}
                  className="font-[600] sm:text-left text-center sm:text-[24px] text-[14px] sm:leading-[24px] leading-[17.22px] text-[#FFFFFF]"
                >
                  Mission
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="font-[400] text-left sm:text-[20px] text-[12px] sm:leading-[32px] leading-[16.2px] opacity-[0.7] text-[#FFFFFF]"
                >
                  Provide high-quality, natural hair care solutions rooted in
                  Ayurvedic principles, promoting healthy hair growth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-[80px] pt-[42px] sm:px-[52px] px-0 sm:pb-[80px] pb-[40px]">
          <div className="relative sm:mb-[92px] mb-[32px] z-10">
            <img
              src="/assets/id/wrap3.svg"
              className="absolute left-[50%] top-[-6px] sm:h-auto h-[40px] translate-x-[-50%] z-[-1]"
              alt=""
            />
            <h6
              style={{ fontFamily: "ClashDisplay" }}
              className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] text-center text-[#D0AD2A]"
            >
              Challenges
            </h6>
          </div>
          <div className="grid grid-cols-2 gap-[16px] sm:gap-[140px]">
            <div
              style={{ boxShadow: "8px 8px 0px 0px #000000" }}
              className="bg-[#1A1A1A] border sm:px-[32px] px-[16px] sm:py-[40px] py-[16px] border-[#FFFFFF46] rounded-[24px] gap-[34px]"
            >
              <h6
                style={{ fontFamily: "Satoshi" }}
                className="font-[700] sm:text-[28px] text-[18px] sm:leading-[39.2px] leading-[25.2px] sm:pb-[24px] pb-[16px] text-[#FFFFFF]"
              >
                01
              </h6>
              <div className="bg-[#D0AD2A] sm:w-[70px] w-[40px] sm:h-[6px] h-[4px] sm:mb-[16px] mb-[8px]"></div>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] sm:text-[20px] text-[14px] sm:leading-[28px] leading-[19.6px] text-[#FFFFFF]"
              >
                How can we increase conversion rate on mobile? How can we avoid
                drop-offs from landing pages?
              </p>
            </div>
            <div
              style={{ boxShadow: "8px 8px 0px 0px #000000" }}
              className="bg-[#1A1A1A] border sm:px-[32px] px-[16px] sm:py-[40px] py-[16px] border-[#FFFFFF46] rounded-[24px] gap-[34px]"
            >
              <h6
                style={{ fontFamily: "Satoshi" }}
                className="font-[700] sm:text-[28px] text-[18px] sm:leading-[39.2px] leading-[25.2px] sm:pb-[24px] pb-[16px] text-[#FFFFFF]"
              >
                02
              </h6>
              <div className="bg-[#D0AD2A] sm:w-[70px] w-[40px] sm:h-[6px] h-[4px] sm:mb-[16px] mb-[8px]"></div>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] sm:text-[20px] text-[14px] sm:leading-[28px] leading-[19.6px] text-[#FFFFFF]"
              >
                How can we engage new and returning users, make it mobile
                friendly and point to nudges at the right time.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:px-[22px] px-0">
          <div className="grid sm:grid-cols-2 sm:gap-0 gap-[30px] grid-cols-1 w-full">
            <div className="relative z-10 w-[50%] ">
              <img
                src="/assets/id/wrap3.svg"
                className="absolute sm:h-[88.7px] h-[40px] sm:w-[237.55px] w-[100px] object-cover left-0 top-[-6px] z-[-1]"
                alt=""
              />
              <h6
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] text-[#D0AD2A]"
              >
                Old UI
              </h6>
            </div>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[400] sm:text-[20px] text-[12px] sm:leading-[28px] sm:text-left text-center leading-[16.2px] text-[#FFFFFF]"
            >
              Explore the old interface, showing why it needs a big change and
              pointing out the problems users had
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-2 sm:mt-[80px] mt-[40px] sm:gap-[42px] gap-[10px]">
            <img src="/assets/id/photo1.png" alt="" />
            <img src="/assets/id/photo2.png" alt="" />
            <img src="/assets/id/photo3.png" alt="" />
            <img src="/assets/id/photo4.png" alt="" />
          </div>
        </div>
        <div className="sm:px-[22px] py-[120px] px-0">
          <div className="grid grid-cols-2 sm:gap-0 gap-[0px] w-full">
            <div className="relative z-10 w-[50%] ">
              <img
                src="/assets/id/wrap3.svg"
                className="absolute sm:h-[88.7px] h-[40px] sm:w-[237.55px] w-[100px] object-cover left-0 top-[-6px] z-[-1]"
                alt=""
              />
              <h6
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] text-left text-[#D0AD2A]"
              >
                <span className="text-[#FFFFFF]">Proposed</span> Sitemap
              </h6>
            </div>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[400] sm:text-[20px] text-[5px] sm:leading-[28px] leading-[6.75px] text-[#FFFFFF]"
            >
              After finding issues with user experience and analyzing both
              direct and indirect competitors, we've suggested a new sitemap
              that aligns with user needs and meets stakeholder requirements
            </p>
          </div>
          <div className="sm:mt-[80px] mt-[40px] flex justify-center items-center">
            <img src="/assets/item3.svg" alt="" />
          </div>
        </div>
        <div className="mt-[0px] sm:mt-[122px] sm:px-[22px] px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 gap-[20px] w-full">
            <div className="relative z-10 sm:w-[50%] w-full">
              <img
                src="/assets/id/wrap4.svg"
                className="absolute sm:h-[78.7px] h-[40px] sm:w-[137.55px] w-[100px] object-cover sm:left-[100px] left-[50%] translate-x-[-50%] top-[-6px] z-[-1]"
                alt=""
              />
              <h6
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] sm:text-left text-center text-[#FFFFFF]"
              >
                Wireframe
              </h6>
            </div>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[400] sm:text-[20px] text-[12px] sm:leading-[28px] leading-[16.2px] sm:text-left text-center text-[#FFFFFF]"
            >
              Crafted these hi-fidelity wireframes once the UX strategy was
              ready and converted them Visual Designs
            </p>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-1 sm:justify-end justify-center sm:items-end items-center sm:mt-[80px] mt-[20px] gap-[40px]">
            <div className="flex items-center flex-col">
              <img src="/assets/id/photo5.png" className="h-[1774px]" alt="" />
            </div>
            <div className="flex flex-col items-center gap-[26px]">
              <img src="/assets/id/photo6.png" className="h-[893px]" alt="" />
              <img src="/assets/id/photo9.png" className="h-[723px]" alt="" />
            </div>
            <div className="flex flex-col items-center gap-[26px]">
              <img src="/assets/id/photo7.png" className="h-[1225px]" alt="" />
              <img src="/assets/id/photo10.png" className="h-[523px]" alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/id/photo8.png" className="1625px" alt="" />
            </div>
          </div>
        </div>
        <div className="sm:py-[100px] py-[50px] z-10 relative sm:px-[70px] px-0">
          <img
            src="/assets/id/font.png"
            className="absolute left-[41px] top-[327px] z-[-1]"
            alt=""
          />
          <img
            src="/assets/id/color.png"
            className="absolute right-[-90px] bottom-[132px] z-[-1]"
            alt=""
          />
          <div className="relative sm:mb-[82px] mb-[32px] z-10">
            <img
              src="/assets/id/wrap3.svg"
              className="absolute left-[50%] sm:h-[88.7px] h-[40px] sm:w-[237.55px] w-[100px] top-[-6px] translate-x-[-50%] z-[-1]"
              alt=""
            />
            <h6
              style={{ fontFamily: "ClashDisplay" }}
              className="font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] leading-[19.68px] text-center text-[#D0AD2A]"
            >
              Visual Design
            </h6>
          </div>
          <div className="flex relative z-20 items-center sm:flex-row flex-col justify-center mb-[82px] gap-[32px]">
            <div className="bg-[#5B606B33] flex flex-col gap-[10px] border-[2.5px] border-[#2C3742] rounded-[20.14px] px-[46px] py-[26px]">
              <img src="/assets/id/wrap5.svg" alt="" />
              <p className="font-satoshi font-[400] text-[43.63px] leading-[43.63px] text-[#ffffff]">
                Abadi
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-satoshi font-[400] text-[24px] leading-[24px] text-[#9E9E9E]">
                ABCEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-satoshi font-[400] text-[24px] leading-[24px] text-[#9E9E9E]">
                abcdefghijklmopqrstuvwxyz
              </p>
              <p className="font-satoshi font-[400] text-[24px] leading-[24px] text-[#9E9E9E]">
                1234567890
              </p>
              <p className="font-satoshi font-[400] text-[24px] leading-[24px] text-[#9E9E9E]">
                !@#$%^&*(?/
              </p>
            </div>
          </div>
          <div className="flex item-center justify-center">
            <img src="/assets/id/photo11.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#16161A] sm:pt-[20px] pt-[50px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:px-[70px] px-[20px] items-center w-full">
          <div className="relative flex justify-center items-center z-10 sm:w-[70%] w-full">
            <img
              src="/assets/id/wrap3.svg"
              className="absolute sm:h-[88.7px] h-[40px] sm:w-[237.55px] w-[100px] object-cover sm:left-[50%] left-[50%] translate-x-[-50%] top-[-6px] z-[-1]"
              alt=""
            />
            <h6
              style={{ fontFamily: "ClashDisplay" }}
              className="w-full font-[700] sm:text-[40px] text-[16px] sm:leading-[49.2px] sm:text-left text-center leading-[19.68px] text-[#D0AD2A]"
            >
              <span className="text-[#FFFFFF]">Website </span> Revamp
            </h6>
          </div>
        </div>
        <div className="grid sm:mt-[120px] mt-[30px] grid-cols-3 items-end sm:gap-[22px] gap-[10px]">
          <div className="flex flex-col gap-[22px]">
            <img src="/assets/id/product1.png" alt="" />
            <img src="/assets/id/product7.png" alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <img src="/assets/id/product2.png" alt="" />
            <img src="/assets/id/product6.png" alt="" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <img src="/assets/id/product3.png" alt="" />
            <img src="/assets/id/product4.png" alt="" />
            <img src="/assets/id/product5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#16161A] sm:px-[70px] px-[20px] sm:pt-[120px] pt-[50px] pb-[50px] sm:pb-[100px]">
        <p
          style={{ fontFamily: "Satoshi" }}
          className="w-full max-w-[931px] m-auto pb-[80px] font-[500] sm:text-[24px] text-[14px] sm:leading-[32.4px] leading-[18.9px] text-center text-[#FFFFFF]"
        >
          Acknowledging the significance of mobile lead generation, I ensured
          the optimal experience is also provided for mobile devices
        </p>
        <div className="bg-[#222222] z-20 sm:px-[110px] px-[10px] sm:pt-[90px] pt-[30px] relative overflow-hidden rounded-[24px]">
          <img
            src="/assets/id/wrap6.png"
            className="absolute z-[-1] top-[-200px] right-[-250px]"
            alt=""
          />
          <img
            src="/assets/id/wrap7.svg"
            className="absolute z-[-1] bottom-[-144px] left-[-111px]"
            alt=""
          />
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[50px]">
            <div className="flex flex-col gap-[54px]">
              <img src="/assets/id/screen1.png" alt="" />
              <img src="/assets/id/screen2.png" alt="" />
            </div>
            <div className="flex flex-col sm:mt-[180px] mt-0 gap-[54px]">
              <img src="/assets/id/screen3.png" alt="" />
              <img src="/assets/id/screen4.png" alt="" />
            </div>
            <div className="flex flex-col gap-[54px]">
              <img src="/assets/id/screen5.png" alt="" />
              <img src="/assets/id/screen6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1D24] flex items-center justify-between w-full sm:py-[80px] py-[16px] px-[16px] sm:px-[70px]">
        <Link to="/">
          <div className="flex items-center gap-[20px]">
            <img src="/assets/home/left-btn.svg" alt="" />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[18.9px] text-center text-[#FFFFFF]"
            >
              Reclaimz
            </p>
          </div>
        </Link>
        <Link to="/Tech">
          <div className="flex items-center gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[18.9px] text-center text-[#FFFFFF]"
            >
              Tech
            </p>
            <img src="/assets/home/right-btn.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="bg-[#111212] overflow-hidden sm:px-[48px] px-[18px] sm:pt-[110px] pt-[42px] sm:pb-0 pb-[42px]">
        <div className="w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[500] opacity-[60%] sm:text-[64px] text-[29.83px] sm:leading-[78.72px] leading-[36.69px] text-center text-[#FFFFFF]"
          >
            Let's create meaningful
          </p>
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[500] sm:mr-[100px] ml-0 sm:text-[64px] text-[29.83px] sm:leading-[78.72px] leading-[36.69px] text-center text-[#FFFFFF]"
          >
            design stories
          </p>
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[500] opacity-[60%] sm:ml-[250px] ml-0 sm:text-[64px] text-[29.83px] sm:leading-[78.72px] leading-[36.69px] text-center text-[#FFFFFF]"
          >
            together
          </p>
        </div>
        <div className="flex justify-center items-center sm:mt-[48px] mt-[24px] sm:pb-[64px] pb-[44px]">
          <button
            style={{ fontFamily: "Satoshi" }}
            className="flex font-[700] font-satoshi text-[16px] leading-[21.6px] text-[#] items-center bg-[#FFFFFF] px-[16px] py-[12px] rounded-[16px] gap-[8px]"
          >
            <img src="/assets/home/active.svg" alt="" />
            Hire Me
            <img src="/assets/home/Down.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="bg-[#111212] overflow-hidden">
        <div className="flex relative">
          <img
            src="/assets/home/photo19.webp"
            className="sm:px-[48px] relative sm:bottom-[-90px] pt-[8px] bottom-[8px] w-full object-cover sm:pb-0 pb-[10px] px-[20px]"
            alt=""
          />
          <div className="bg-[#62269E73] blur-footer absolute bottom-0 w-full py-[12px] px-[48px] font-satoshi font-[500] sm:text-[16px] text-[12px] sm:leading-[20.8px] leading-[15.6px] text-[#FFFFFF] text-center">
            2024 © Design & Developed by Mihir
          </div>
        </div>
      </div>
    </>
  );
}

export default Indulekha;
