import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="sm:px-[48px] overflow-hidden px-[16px] pt-[70px] bg-[#16161A]">
        <div className="flex flex-col sm:py-[110px] py-[50px] justify-center items-center">
          <div className="flex items-center sm:mb-[26px] mb-[16px] gap-[14px]">
            <img src="/assets/home/i.webp" alt="" />
            <p className="font-satoshi text-white font-[700] text-[16px] leading-[21.6px]">
              Typeface
            </p>
          </div>
          <div className="flex sm:gap-[32px] gap-[22px] flex-row mb-[24px] items-start">
            <p
              style={{ fontFamily: "ClashDisplay" }}
              className="font-[400] sm:text-[80px] text-[32px] sm:leading-[98.4px] leading-[39.36px] text-[#FFFFFF]"
            >
              Anything
            </p>
            <img
              src="/assets/item1.svg"
              className="sm:w-full w-[150px] sm:h-full h-[45.6px]"
              alt=""
            />
          </div>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[32px] text-[16px] sm:leading-[43.2px] leading-[21.6px] text-[#FFFFFF]"
          >
            Personalized content AI for work
          </p>
        </div>
        <img
          src="/assets/home/photo1.webp"
          className="w-full object-cover"
          alt=""
        />
        <div className="flex py-[50px] sm:max-w-full max-w-[294px] m-auto sm:py-[110px] justify-center flex-col items-center">
          <img src="/assets/item2.svg" alt="" />
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[500] sm:text-[24px] text-[12px] sm:leading-[31.2px] leading-[15.6px] text-[#F2F4F7] py-[24px] text-center"
          >
            For enterprises aiming to harness the full scope of their creative
            prowess
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#F2F4F7] font-[400] sm:text-[62px] text-[16px] sm:leading-[80.6px] leading-[20.8px] text-center"
          >
            It marries <span className="text-[#FD243E]">content velocity </span>
            with
            <span className="text-[#FD243E]"> brand identity,</span>
            ensuring every{" "}
            <span className="text-[#FD243E]">company (client)</span> can fully
            unlock its
            <span className="text-[#FD243E]">creative potential.</span>
          </p>
        </div>
        <div className="sm:py-[72px] py-[30px]">
          <div className="flex sm:mb-[16px] mb-[8px] items-center gap-[16px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] uppercase sm:text-[16px] text-[12px] sm:leading-[20.8px] leading-[15.6px] text-[#FD243E]"
            >
              The potential users
            </p>
            <div className="bg-[#FD243E] h-[1px] sm:max-w-[169px] max-w-[48px] w-full"></div>
          </div>
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="text-[#FFFFFF] font-[400] sm:text-[32px] text-[18px] sm:leading-[41.6px] leading-[23.4px] sm:mb-[48px] mb-[20px]"
          >
            Content creators | Marketing folks
          </p>
          <div className="user-section">
            <div className="max-w-[713px] sm:p-[48px] p-[20px] pb-0 w-full">
              <h6
                style={{ fontFamily: "Satoshi" }}
                className="font-[700] sm:mb-[40px] mb-[24px] sm:text-[42px] text-[20px] sm:leading-[56.7px] leading-[27px] text-[#FFFFFF]"
              >
                Sarah Thompson
              </h6>
              <div className="flex flex-col mb-[32px] gap-[30px]">
                <div>
                  <h6
                    style={{ fontFamily: "Satoshi" }}
                    className="font-[700] mb-[12px] sm:text-[16px] text-[12px] sm:leading-[21.6px] leading-[16.2px] text-[#FFFFFF]"
                  >
                    GOALS & MOTIVATION
                  </h6>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="font-[400] mb-0 sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF]"
                  >
                    Sarah's focus is on enhancing Nike's brand presence through
                    innovative and engaging content, enabling her to efficiently
                    scale content production, staying at the forefront of
                    creative endeavors.
                  </p>
                </div>
                <div>
                  <h6
                    style={{ fontFamily: "Satoshi" }}
                    className="font-[700] mb-[12px] sm:text-[16px] text-[12px] sm:leading-[21.6px] leading-[16.2px] text-[#FFFFFF]"
                  >
                    CHALLENGES
                  </h6>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="font-[400] mb-0 sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF]"
                  >
                    Balancing brand identity with time constraints, Sarah relies
                    on creative team to streamline content creation, ensuring
                    brand’s unique voice remains consistent across diverse
                    marketing projects.
                  </p>
                </div>
              </div>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="text-[#FFFFFF] mb-[12px] font-[500] sm:text-[40px] text-[20px] sm:leading-[54px] leading-[27px]"
              >
                <span className="text-[#FFC431]">Leveraging</span> power
                behind...
              </p>
            </div>
            <div className="flex pl-[20px] sm:pl-[48px] max-w-[837px] sm:pb-0 pb-[40px] w-full flex-wrap sm:gap-[24px] gap-[12px]">
              <button
                style={{ fontFamily: "Satoshi" }}
                className="sm:py-[14px] py-[8px] sm:px-[20px] px-[8px] border border-[#D0D5DD] text-[#FFFFFF] font-[500] italic sm:text-[18px] text-[12px] sm:leading-[24.3px] leading-[16.2px]"
              >
                Efficiency and Scale
              </button>
              <button className="py-[14px] px-[20px] border border-[#D0D5DD] text-[#FFFFFF] font-[500] italic sm:text-[18px] text-[12px] sm:leading-[24.3px] leading-[16.2px]">
                Brand Personalization and Control
              </button>
              <button className="py-[14px] px-[20px] border border-[#D0D5DD] text-[#FFFFFF] font-[500] italic sm:text-[18px] text-[12px] sm:leading-[24.3px] leading-[16.2px]">
                Creativity and Innovation:
              </button>
              <button className="py-[14px] px-[20px] border border-[#D0D5DD] text-[#FFFFFF] font-[500] italic sm:text-[18px] text-[12px] sm:leading-[24.3px] leading-[16.2px]">
                Meeting Tight Deadlines:
              </button>
            </div>
          </div>
          <div className="sm:py-[110px] py-[50px]">
            <div className="flex sm:mb-[16px] mb-[8px] items-center sm:gap-[16px] gap-[8px]">
              <p
                style={{ fontFamily: "Satoshi" }}
                className="uppercase font-[500] sm:text-[16px] text-[12px] sm:leading-[20.8px] leading-[15.6px] text-[#FD243E]"
              >
                Hassling between the most
              </p>
              <div className="bg-[#FD243E] h-[1px] sm:max-w-[169px] max-w-[48px] w-full"></div>
            </div>
            <p
              style={{ fontFamily: "ClashDisplay" }}
              className="font-clash text-[#FFFFFF] font-[400] sm:text-[32px] text-[20px] sm:leading-[41.6px] leading-[26px] sm:mb-[72px] mb-[32px]"
            >
              Work-intensive tasks
            </p>
            <div className="flex items-center sm:flex-row flex-col justify-between">
              <div className="max-w-[431.77px] w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[24px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[40px] mb-[20px]"
                >
                  Creatives takes more time apart from Data processing which
                  seems to be very important and needs manual intervention.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] mb-[20px] font-[400] sm:text-[16px] text-[12px] opacity-50 sm:leading-[21.6px] leading-[16.2px]"
                >
                  {" "}
                  A survey by <span className="underline">Hubspot</span>
                </p>
                <img src="/assets/home/hub-spot.webp" alt="" />
              </div>
              <div className="sm:hidden block pt-[40px]">
                <img src="/assets/item4.svg" alt="" />
              </div>
              <div className="max-w-[772.63px] sm:block hidden pr-[60px] w-full">
                <img src="/assets/home/a5.webp" alt="" />
              </div>
              {/* <div className="max-w-[772.63px] sm:block hidden pr-[60px] w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] opacity-50 text-right mb-[20px] font-[400] text-[16px] leading-[21.6px] font-satoshi"
                >
                  Hours spent each week
                </p>
                <div className="flex flex-col gap-[32px]">
                  <div className="flex">
                    <p
                      style={{ fontFamily: "Satoshi" }}
                      className="text-[#FFFFFF] mb-[20px] max-w-[200px] w-full font-[500] text-[16px] leading-[21.6px] font-satoshi"
                    >
                      Collecting, Organizing & analyzing data
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      className="custom-range"
                      value="70"
                    />
                  </div>
                  <div className="flex">
                    <p
                      style={{ fontFamily: "Satoshi" }}
                      className="text-[#FFFFFF] mb-[20px] max-w-[200px] w-full font-[500] text-[16px] leading-[21.6px] font-satoshi"
                    >
                      Email
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      className="custom-range"
                      value="50"
                    />
                  </div>
                  <div className="flex">
                    <p
                      style={{ fontFamily: "Satoshi" }}
                      className="text-[#FFFFFF] mb-[20px] max-w-[200px] w-full font-[500] text-[16px] leading-[21.6px] font-satoshi"
                    >
                      Landing Pages
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      className="custom-range"
                      value="40"
                    />
                  </div>
                  <div className="flex">
                    <p
                      style={{ fontFamily: "Satoshi" }}
                      className="text-[#FFFFFF] mb-[20px] max-w-[200px] w-full font-[500] text-[16px] leading-[21.6px] font-satoshi"
                    >
                      Social media posts
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      className="custom-range"
                      value="30"
                    />
                  </div>
                  <div className="flex">
                    <p
                      style={{ fontFamily: "Satoshi" }}
                      className="text-[#FFFFFF] mb-[20px] max-w-[200px] w-full font-[500] text-[16px] leading-[21.6px] font-satoshi"
                    >
                      List Management
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      className="custom-range"
                      value="20"
                    />
                  </div>
                </div>
                <div className="flex gap-[98px] items-center pl-[200px]">
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="text-[#FFFFFF] opacity-50 font-[400] text-[16px] leading-[21.6px] font-satoshi"
                  >
                    2.4
                  </p>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="text-[#FFFFFF] opacity-50 font-[400] text-[16px] leading-[21.6px] font-satoshi"
                  >
                    2.7
                  </p>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="text-[#FFFFFF] opacity-50 font-[400] text-[16px] leading-[21.6px] font-satoshi"
                  >
                    3.0
                  </p>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="text-[#FFFFFF] opacity-50 font-[400] text-[16px] leading-[21.6px] font-satoshi"
                  >
                    3.3
                  </p>
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="text-[#FFFFFF] opacity-50 font-[400] text-[16px] leading-[21.6px] font-satoshi"
                  >
                    3.6
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="sm:pt-[120px] pt-[10px] pb-[10px] sm:pb-[160px]">
            <div className="flex gap-[40px] sm:gap-[140px] flex-col sm:flex-row items-center">
              <div className="max-w-[431.77px] w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[24px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[40px] mb-[20px]"
                >
                  According to Hubspot, 53% of marketers say blog creation is
                  their top inbound-marketing priority.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] mb-[20px] font-[400] sm:text-[16px] text-[12px] sm:leading-[21.6px] leading-[16.2px] opacity-50"
                >
                  A survey by <span className="underline">Hubspot</span>
                </p>
                <img src="/assets/home/hub-spot.webp" alt="" />
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:gap-[20px] gap-0">
                <div>
                  <img src="/assets/home/photo20.webp" alt="" />
                </div>
                <div>
                  <img src="/assets/home/photo21.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#191C1D] overflow-hidden relative pt-[50px] sm:pt-[200px] sm:pl-[100px] pl-[20px] sm:pr-[76px] pr-[20px] sm:pb-[190px] pb-[50px]">
        <img
          src="/assets/home/wrap-1.webp"
          className="absolute bottom-[-213px] left-[-223px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute sm:top-[50%] top-[130px] sm:w-auto w-[116.15px] sm:h-auto h-[114.81px] sm:right-[-103px] right-[-18px] translate-y-[-50%]"
          alt=""
        />
        <div className="flex justify-between sm:flex-row flex-col items-center">
          <div className="max-w-[791px] w-full">
            <div className="sm:max-w-[393px] max-w-[358px] sm:hidden flex mb-[42px] flex-col items-center gap-[24px] w-full">
              <div className="flex flex-wrap sm:gap-[24px] justify-center items-center gap-[16px]">
                <img
                  src="/assets/home/item1.webp"
                  className="w-[143.49px]"
                  alt=""
                />
                <img
                  src="/assets/home/item2.webp"
                  className="w-[123.29px]"
                  alt=""
                />
                <img
                  src="/assets/home/item3.webp"
                  className="w-[97.7px]"
                  alt=""
                />
                <img
                  src="/assets/home/item4.webp"
                  className="w-[135.82px]"
                  alt=""
                />
              </div>
            </div>
            <p
              style={{ fontFamily: "ClashDisplay" }}
              className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] sm:mb-[66px] mb-[24px]"
            >
              Limitations of the prevailing AI solutions.
            </p>
            <div className="flex flex-col sm:gap-[12px] gap-[8px]">
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:py-[15px] py-[8px] sm:px-[24px] px-[8px] font-[400] sm:text-[18px] text-[14px] sm:leading-[24.3px] leading-[18.9px] text-[#FFFFFF]"
              >
                Tools generate random and new words (sometimes)
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:py-[15px] py-[8px] sm:px-[24px] px-[8px] font-[400] sm:text-[18px] text-[14px] sm:leading-[24.3px] leading-[18.9px] text-[#FFFFFF]"
              >
                Some tools needs integration with other tools to generate
                insights
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:py-[15px] py-[8px] sm:px-[24px] px-[8px] font-[400] sm:text-[18px] text-[14px] sm:leading-[24.3px] leading-[18.9px] text-[#FFFFFF]"
              >
                Dependency on other people, for content and creatives
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="py-[15px] bg-[#4B0096] rounded-[16px] flex sm:flex-row flex-col sm:gap-[16px] gap-[8px] sm:px-[24px] px-[12px] font-satoshi font-[400] sm:text-[18px] text-[14px] sm:leading-[24.3px] leading-[18.9px] text-[#FFFFFF]"
              >
                <button className="bg-[#000000] rounded-[4px] py-[4px] px-[8px] sm:w-full w-[100px] font-satoshi font-[600] sm:text-[18px] text-[12px] sm:leading-[24.3px] leading-[16.2px]">
                  Surprising Fact
                </button>{" "}
                Unawareness about the AI based Creatives/graphic generation tool
              </p>
            </div>
          </div>
          <div className="sm:max-w-[393px] max-w-[358px] sm:flex hidden flex-col items-center gap-[24px] w-full">
            <img src="/assets/home/item1.webp" alt="" />
            <div className="flex gap-[24px]">
              <img src="/assets/home/item2.webp" alt="" />
              <img src="/assets/home/item3.webp" alt="" />
            </div>
            <img src="/assets/home/item4.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] sm:px-[100px] px-[16px] sm:pt-[160px] pt-[42px]">
        <h6
          style={{ fontFamily: "Satoshi" }}
          className="font-[700] sm:text-[24px] text-[12px] sm:leading-[32px] leading-[15.6px] sm:text-[#000000] text-[#FD243E] sm:mb-[32px] uppercase mb-[8px]"
        >
          Task Flows
        </h6>
        <p
          style={{ fontFamily: "Satoshi" }}
          className="font-[400] sm:text-[60px] text-[20px] sm:leading-[70px] leading-[26px] text-[#000000] sm:mb-[100px] mb-[32px]"
        >
          Strategic taskflows streamline operations, ensuring efficient resource
          utilization and goal attainment.
        </p>
      </div>
      <div className="flex items-start sm:flex-row flex-col sm:mb-[100px] mb-[50px] justify-center overflow-hidden">
        <img src="/assets/home/photo2.webp" alt="" />
        <img src="/assets/home/photo3.webp" alt="" />
        <img src="/assets/home/photo4.webp" alt="" />
        <img src="/assets/home/photo5.webp" alt="" />
      </div>
      <div className="bg-[#000000] flex sm:flex-row flex-col gap-[53px] justify-center items-start pt-[60px] sm:pl-[60px] pl-[20px] pr-[20px] sm:pr-[60px] pb-[50px] sm:pb-[160px]">
        <img src="/assets/home/photo6.webp" alt="" />
        <img src="/assets/home/photo7.webp" alt="" />
        <img src="/assets/home/photo8.webp" alt="" />
      </div>
      <div className="bg-[#171717] sm:pb-0 pb-[70px] relative sm:px-[100px] px-[16px] pt-[42px] sm:pt-[160px] overflow-hidden">
        <img
          src="/assets/home/wrap-1.webp"
          className="absolute right-[-273px] top-[-257px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute sm:left-[-40px] left-[-24px] sm:w-auto sm:h-auto w-[131px] h-[131px] sm:top-[50%] top-[90%] translate-y-[-50%]"
          alt=""
        />
        <p
          style={{ fontFamily: "ClashDisplay" }}
          className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
        >
          Onboard with your brand
        </p>
        <p
          style={{ fontFamily: "Satoshi" }}
          className="font-[400] max-w-[949px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[24px] mb-[16px]"
        >
          Embrace a seamless brand integration journey with AI, ensuring a
          cohesive and authentic brand representation.
        </p>
        <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        <div className="sm:mt-[57px] mt-[32px]">
          <img
            src="/assets/home/photo9.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="sm:bg-[#0B0000] bg-[#171717] relative overflow-hidden sm:pt-[160px] pt-[42px]">
        <img
          src="/assets/home/wrap-3.webp"
          className="sm:absolute relative left-[-383px] sm:block hidden bottom-0"
          alt=""
        />
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute right-[-40px] sm:w-auto sm:h-auto w-[131px] h-[131px] top-[-40px]"
          alt=""
        />
        <img
          src="/assets/home/photo11.webp"
          className="absolute z-10 sm:w-auto w-[273.75px] sm:h-auto h-[223.5px] right-[0px] sm:right-[0px] top-[90px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-4.webp"
          className="absolute right-[-320px] bottom-[-64px]"
          alt=""
        />
        <div className="max-w-[760px] sm:pl-[100px] px-[16px] w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
          >
            Aligning AI with the brand
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] max-w-[949px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[24px] mb-[16px]"
          >
            Nurturing an AI-driven brand persona, resonating with your unique
            identity and vision
          </p>
          <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        </div>
        <div className="mt-[57px] relative z-1">
          <img
            src="/assets/home/photo10.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#171717] relative sm:pb-0 pb-[42px] overflow-hidden sm:pt-[160px] pt-[42px]">
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute sm:left-[-40px] left-unset sm:w-auto sm:h-auto w-[131px] h-[131px] top-[50%] translate-y-[-50%]"
          alt=""
        />
        <img
          src="/assets/home/photo22.webp"
          className="absolute z-10 sm:w-auto w-[273.75px] sm:h-auto h-[223.5px] right-[0px] sm:right-[0px] top-[150px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-5.webp"
          className="absolute right-[-273px] top-[-257px]"
          alt=""
        />
        <div className="max-w-[760px] sm:pl-[100px] pl-[20px] w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
          >
            Project gallery
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] max-w-[800px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[24px] mb-[16px]"
          >
            Effortlessly manage and orchestrate your projects, fostering
            seamless collaboration and bringing your visions to life.
          </p>
          <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        </div>
        <div className="mt-[57px] relative z-1">
          <img
            src="/assets/home/photo12.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="sm:bg-[#0B0000] bg-[#171717] relative overflow-hidden sm:pt-[160px] sm:pb-0 pb-[42px] pt-[50px]">
        <img
          src="/assets/home/wrap-3.webp"
          className="absolute left-[-383px] bottom-0"
          alt=""
        />

        <img
          src="/assets/home/wrap-2.webp"
          className="absolute right-[-40px] sm:w-auto sm:h-auto w-[131px] h-[131px] top-[-40px]"
          alt=""
        />
        <img
          src="/assets/home/photo13.webp"
          className="absolute z-10 right-[-6px] sm:w-auto w-[267.25px] sm:h-auto h-[140px] sm:top-[90px] top-[130px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-4.webp"
          className="absolute right-[-320px] bottom-[-64px]"
          alt=""
        />
        <div className="max-w-[760px] sm:pl-[100px] px-[16px] w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
          >
            Generative AI: Copy
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] max-w-[800px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] sm:mb-[24px] mb-[16px]"
          >
            Effortlessly generate tailored text with AI, allowing precise
            control over tone, length, and style for optimal communication
            impact.
          </p>
          <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        </div>
        <div className="mt-[57px] relative z-1">
          <img
            src="/assets/home/photo14.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#171717] relative overflow-hidden sm:pt-[160px] sm:pb-0 pb-[42px] pt-[42px]">
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute left-[-40px] top-[50%] sm:w-auto sm:h-auto w-[131px] h-[131px] translate-y-[-50%]"
          alt=""
        />
        <img
          src="/assets/home/photo16.webp"
          className="absolute z-10 sm:w-auto w-[146.5px] sm:h-auto h-[200px] right-[-30px] sm:top-[30px] top-[120px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-5.webp"
          className="absolute right-[-273px] top-[-257px]"
          alt=""
        />
        <div className="max-w-[760px] sm:pl-[100px] pl-[20px] w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
          >
            Generative AI: Image
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] max-w-[800px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] mb-[24px]"
          >
            Effortlessly manage and orchestrate your projects, fostering
            seamless collaboration and bringing your visions to life.
          </p>
          <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        </div>
        <div className="mt-[57px] relative z-1">
          <img
            src="/assets/home/photo15.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="sm:bg-[#0B0000] bg-[#171717] relative overflow-hidden sm:pt-[160px] sm:pb-0 pb-[42px] pt-[42px]">
        <img
          src="/assets/home/wrap-3.webp"
          className="absolute left-[-383px] bottom-0"
          alt=""
        />
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute right-[-40px] sm:w-auto sm:h-auto w-[131px] h-[131px] top-[-40px]"
          alt=""
        />
        <img
          src="/assets/home/photo24.webp"
          className="absolute z-10 sm:w-auto w-[273.75px] sm:h-auto h-[223.5px] right-[0px] sm:right-[0px] top-[330px]"
          alt=""
        />
        <img
          src="/assets/home/wrap-4.webp"
          className="absolute right-[-320px] bottom-[-64px]"
          alt=""
        />
        <div className="max-w-[800px] sm:pl-[100px] px-[20px] w-full">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[400] sm:text-[60px] text-[24px] sm:leading-[73.8px] leading-[29.52px] text-[#FFFFFF] mb-[8px]"
          >
            Blog post, landing pages, posts and what not...
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] max-w-[800px] w-full sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF] mb-[24px]"
          >
            Seamlessly blend generative text and images for captivating blog
            posts, ensuring an engaging and cohesive narrative.
          </p>
          <div className="bg-[#DC1933] max-w-[80px] w-full h-[4px]"></div>
        </div>
        <div className="mt-[57px] relative z-1">
          <img
            src="/assets/home/photo17.webp"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#171717] overflow-hidden relative pt-[160px] sm:pt-[50px] px-[20px] sm:px-[100px] pb-[60px]">
        <img
          src="/assets/home/wrap-2.webp"
          className="absolute left-[-90px] top-[-101px]"
          alt=""
        />
        <div>
          <h6
            style={{ fontFamily: "Satoshi" }}
            className="font-[700] sm:text-[24px] text-[12px] sm:leading-[32px] leading-[16.2px] text-[#ffffff] sm:mb-[32px] mb-[8px]"
          >
            In the ever-evolving landscape of content creation
          </h6>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-satoshi font-[300] sm:text-[60px] text-[20px] sm:leading-[81px] leading-[26px] text-[#ffffff]"
          >
            "TypeFace" will emerge as a transformative force, bridging the gap
            between AI-driven innovation and authentic brand expression.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse sm:bg-[#0B0000] sm:px-0 px-[16px] sm:pb-0 pb-[42px] bg-[#171717]">
        <img src="/assets/home/photo18.webp" alt="" />
        <div className="sm:py-[172px] py-[42px] flex flex-col overflow-hidden sm:gap-[40px] gap-[12px] sm:px-[100px] px-[20px] relative">
          <img
            src="/assets/home/wrap-1.webp"
            className="absolute right-[-316px] top-[-420px]"
            alt=""
          />
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#ffffff]"
          >
            With its seamless integration of AI technology and manual brand
            manipulation, "TypeFace" empowers businesses to create compelling
            narratives that resonate with audiences on a deeper level.
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#ffffff]"
          >
            By fostering an environment where AI learns and interprets brand
            identity, "TypeFace" provides a dynamic platform for businesses to
            curate their unique stories while aligning with their brand
            guidelines effortlessly.
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] flex sm:flex-row flex-col sm:px-[100px] px-[16px] sm:pt-[160px] pt-[42px] sm:pb-[208px] pb-[42px] sm:gap-[25px] gap-[12px]">
        <div className="max-w-[292px] w-full">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#DC1933] font-[700] sm:text-[20px] text-[12px] sm:leading-[27px] leading-[15.6px] sm:pb-[32px] pb-[8px]"
          >
            DOMAIN LEARNINGS
          </p>
          <img
            src="/assets/home/item5.webp"
            className="sm:w-auto w-[32px] sm:h-auto h-[32px]"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:gap-[40px] gap-[20px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#000000] font-satoshi font-[500] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.2px]"
          >
            We learned the critical importance of balancing AI-driven automation
            with manual brand control, facilitating a harmonious convergence of
            efficiency and brand personalization.
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#000000] font-satoshi font-[500] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.2px]"
          >
            We also gained insights into the integral role of AI in streamlining
            content creation processes while upholding the integrity of brand
            identity, ultimately fostering a more dynamic and engaging user
            experience.
          </p>
        </div>
      </div>
      <div className="bg-[#BD2235] sm:px-[100px] px-[16px] sm:pt-[80px] pt-[42px] pb-[42px] sm:pb-[128px]">
        <p
          style={{ fontFamily: "Satoshi" }}
          className="font-[400] sm:text-[32px] text-[12px] sm:leading-[48px] leading-[16.2px] uppercase text-center text-[#FFFFFF] sm:mb-[24px] mb-[16px]"
        >
          The product is in it’s Beta stage, and might come out very soon
        </p>
        <p
          style={{ fontFamily: "ClashDisplay" }}
          className="font-clash font-[400] max-w-[984px] w-full m-auto sm:text-[60px] text-[24px] sm:leading-[90px] leading-[29.52px] text-[#FFFFFF] text-center"
        >
          Thank you for being a part of the "TypeFace" story.
        </p>
      </div>
      <div className="bg-[#1A1D24] flex items-center justify-between w-full sm:py-[80px] py-[18px] px-[16px] sm:px-[70px]">
        <Link to="/tech">
          <div className="flex items-center gap-[20px]">
            <img src="/assets/home/left-btn.webp" alt="" />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[18.9px] text-center text-[#FFFFFF]"
            >
              Reclaimz
            </p>
          </div>
        </Link>
        <Link to="/indulekha">
          <div className="flex items-center gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[18.9px] text-center text-[#FFFFFF]"
            >
              Indulekha
            </p>
            <img src="/assets/home/right-btn.webp" alt="" />
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
            <img src="/assets/home/active.webp" alt="" />
            Hire Me
            <img src="/assets/home/Down.webp" alt="" />
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

export default Home;
