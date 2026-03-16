import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

function Tech() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="overflow-hidden pt-[70px] bg-[#16161A]">
        <div className="sm:px-[100px] px-[20px] sm:gap-0 gap-[20px] sm:py-[52px] py-[20px] sm:flex-row flex-col-reverse flex sm:items-center items-start justify-between">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.9px] sm:text-left text-center max-w-[819px] w-full text-[#FFFFFF]"
          >
            Powering assembly line efficiency with artificial intelligence,
            minimizing human errors.
          </p>
          <div className="flex sm:justify-start justify-center w-full ">
            <img
              src="/assets/tech/logo.png"
              className="sm:h-auto h-[24px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex sm:h-auto h-[184px] flex-row">
          <img
            src="/assets/tech/photo1.png"
            className="sm:w-full w-[224.92px] object-cover"
            alt=""
          />
          <div className="bg-[#DC1933] relative sm:p-0 p-[40px] sm:max-w-[40%] max-w-[100%] w-full">
            <p
              style={{ fontFamily: "ClashDisplay" }}
              className="relative sm:left-[-116px] left-[-80px] sm:top-[50%] top-0 sm:translate-y-[-50%] translate-y-[-0%] text-line-s font-[700] max-w-[626px] w-full sm:text-[200px] text-[51.94px] sm:leading-[200px] leading-[51.94px] text-left text-[#FFFFFF]"
            >
              Line <br />
              Sense
              <img
                src="/assets/tech/icon1.svg"
                className="absolute sm:right-[12px] sm:h-auto h-[25.97px] sm:w-auto w-[25.97px] right-[-15px] sm:top-[73px] top-[20px]"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="flex sm:px-[100px] px-[20px] sm:py-[160px] py-[50px] sm:flex-row flex-col items-start sm:gap-[25px] gap-[8px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="max-w-[292px] w-full sm:text-[20px] text-[12px] font-[700] sm:leading-[27px] leading-[15.6px] text-[#DC1933]"
          >
            Overview
          </p>
          <div className="w-full">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:pb-[38px] pb-0 sm:text-[32px] text-[12px] font-[500] sm:leading-[48px] leading-[16.2px] text-[#FFFFFF]"
            >
              In the realm of manufacturing excellence, precision and quality
              are paramount. Welcome to the world of "LineSense," where we've
              redefined the assembly line landscape.
            </p>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[32px] text-[18px] pb-[38px] font-[500] sm:leading-[48px] leading-[23.4px] text-[#FFFFFF]"
            >
              In this transformative project, we've harnessed the power of
              advanced technology, leveraging the combination of cameras and
              sensors to infuse artificial intelligence into most of the step of
              the manufacturing journey.
            </p>
            <div className="bg-[#DC1933] w-[80px] h-[4px] mb-[38px]"></div>
            <div className="flex gap-[24px] flex-row">
              <button className="border border-[#FFFFFF] sm:px-[24px] px-[12px] sm:py-[16px] py-[8px] rounded-[80px] sm:text-[20px] text-[14px] font-[700] sm:leading-[27px] leading-[18.9px] text-[#FFFFFF]">
                Smarter Assembly Lines
              </button>
              <button className="border border-[#FFFFFF] sm:px-[24px] px-[12px] sm:py-[16px] py-[8px] rounded-[80px] sm:text-[20px] text-[14px] font-[700] sm:leading-[27px] leading-[18.9px] text-[#FFFFFF]">
                Minimised Errors
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:px-[100px] px-[20px] sm:py-[160px] py-[60px] flex-row items-center sm:gap-[250px] gap-[50px]">
          <p
            style={{ fontFamily: "ClashDisplay" }}
            className="font-[700] sm:text-[200px] text-[24px] sm:leading-[200px] leading-[29.52px] text-left text-[#FFFFFF]"
          >
            Setup
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
          >
            For an instance, consider the product&nbsp;
            <span className="underline">Mahindra Scorpio Petrol Variant</span>
          </p>
        </div>
        <div className="sm:hidden block">
          <img src="/assets/photo2.png" alt="" />
        </div>
        <div className="sm:flex hidden sm:flex-row items-center gap-[24px] sm:pb-[190px] pb-[60px] sm:pl-[100px] pl-[20px]">
          <div className="flex flex-col items-center gap-[12px]">
            <img src="/assets/tech/icon2.svg" alt="" />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[18px] leading-[24px] max-w-[187px] text-center text-[#FFFFFF]"
            >
              Mahindra Scroprio Petrol Variant
            </p>
          </div>
          <div className="border-dashed sm:block hidden bg-[#FFFFFF] pt-[83px] relative w-full border-[2px] rounded-l-[40px] border-[#CACFED]">
            <div className="flex sm:flex-row flex-col absolute top-0 sm:gap-[160px] gap-[250px]">
              <img src="/assets/tech/camaro.svg" alt="" />
              <img src="/assets/tech/camaro.svg" alt="" />
              <img src="/assets/tech/camaro.svg" alt="" />
              <img src="/assets/tech/camaro.svg" alt="" />
              <img src="/assets/tech/camaro.svg" alt="" />
            </div>
            <div className="flex sm:flex-row flex-col pl-[40px] pb-[48px] gap-[40px]">
              <div className="flex flex-col items-center max-w-[187px] m-auto">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pb-[16px] font-[700] text-[14px] leading-[18.9px] text-[#000000]"
                >
                  Workstation 1
                </p>
                <img src="/assets/tech/icon4.svg" alt="" />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pt-[16px] pb-[12px] font-[400] text-[18px] leading-[24px] text-[#000000]"
                >
                  Door Assembling
                </p>
                <img src="/assets/tech/icon3.svg" alt="" />
              </div>
              <div className="flex flex-col items-center max-w-[187px] m-auto">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pb-[16px] font-[700] text-[14px] leading-[18.9px] text-[#000000]"
                >
                  Workstation 2
                </p>
                <img src="/assets/tech/icon5.svg" alt="" />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pt-[16px] pb-[12px] font-[400] text-[18px] leading-[24px] text-[#000000]"
                >
                  Tyres Fitting
                </p>
                <img src="/assets/tech/icon3.svg" alt="" />
              </div>
              <div className="flex flex-col items-center max-w-[187px] m-auto">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pb-[16px] font-[700] text-[14px] leading-[18.9px] text-[#000000]"
                >
                  Workstation 3
                </p>
                <img src="/assets/tech/icon6.svg" alt="" />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pt-[16px] pb-[12px] font-[400] text-[18px] leading-[24px] text-[#000000]"
                >
                  Alignment & Balancing
                </p>
                <img src="/assets/tech/icon3.svg" alt="" />
              </div>
              <div className="flex flex-col items-center max-w-[187px] m-auto">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pb-[16px] font-[700] text-[14px] leading-[18.9px] text-[#000000]"
                >
                  Workstation 4
                </p>
                <img src="/assets/tech/icon7.svg" alt="" />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pt-[16px] pb-[12px] font-[400] text-[18px] leading-[24px] text-[#000000]"
                >
                  Engine Calibration
                </p>
                <img src="/assets/tech/icon3.svg" alt="" />
              </div>
              <div className="flex flex-col items-center max-w-[187px] m-auto">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pb-[16px] font-[700] text-[14px] leading-[18.9px] text-[#000000]"
                >
                  Workstation 5
                </p>
                <img src="/assets/tech/icon8.svg" alt="" />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center pt-[16px] pb-[12px] font-[400] text-[18px] leading-[24px] text-[#000000]"
                >
                  Glass Shields
                </p>
                <img src="/assets/tech/icon3.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-[100px] px-[20px] bg-[#0F0F11] sm:py-[160px] py-[60px] flex flex-col sm:gap-[160px] gap-[60px]">
          <div className="flex sm:gap-[88px] gap-0 justify-between flex-row items-center">
            <div className="w-full max-w-[546px]">
              <p
                style={{ fontFamily: "Satoshi" }}
                className="max-w-[503px] pb-[24px] w-full sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
              >
                The journey unfolded for our heroes.
              </p>
              <div className="flex flex-row sm:gap-[24px] gap-[8px]">
                <div className="bg-[#000000] sm:max-w-[190px] max-w-auto w-full sm:h-[48px] h-[18px] flex gap-[8px] items-center rounded-full border border-[#FFFFFF] p-[4px] pr-[24px]">
                  <img
                    src="/assets/tech/item1.svg"
                    className="sm:h-auto h-[15px] sm:w-auto w-[15px]"
                    alt=""
                  />
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="sm:text-[18px] text-[10px] font-[400] sm:leading-[24.3px] leading-[13.5px] text-[#FFFFFF]"
                  >
                    Data Scientist
                  </p>
                </div>
                <div className="bg-[#000000] sm:h-[48px] h-[18px] flex gap-[8px] items-center rounded-full border border-[#FFFFFF] p-[4px] pr-[24px]">
                  <img
                    src="/assets/tech/item2.svg"
                    className="sm:h-auto h-[15px] sm:w-auto w-[15px]"
                    alt=""
                  />
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="sm:text-[18px] text-[10px] font-[400] sm:leading-[24.3px] leading-[13.5px] text-[#FFFFFF]"
                  >
                    Annotators
                  </p>
                </div>
                <div className="bg-[#000000] sm:h-[48px] h-[18px] flex gap-[8px] items-center rounded-full border border-[#FFFFFF] p-[4px] pr-[24px]">
                  <img
                    src="/assets/tech/item3.svg"
                    className="relative top-[5px] sm:h-auto h-[15px] sm:w-auto w-[15px]"
                    alt=""
                  />
                  <p
                    style={{ fontFamily: "Satoshi" }}
                    className="sm:text-[18px] text-[10px] font-[400] sm:leading-[24.3px] leading-[13.5px] text-[#FFFFFF]"
                  >
                    Validators
                  </p>
                </div>
              </div>
            </div>
            <p
              style={{ fontFamily: "ClashDisplay" }}
              className="max-w-[608px] sm:w-full w-auto sm:text-right text-left font-[700] sm:text-[200px] text-[24px] sm:leading-[200px] leading-[29.52px] text-[#FFFFFF]"
            >
              Story
            </p>
          </div>
          <div className="flex flex-row w-full sm:justify-center justify-start sm:overflow-hidden overflow-x-scroll overflow-y-hidden ">
            <div className="bg-[#DC1933] sm:max-w-[248px] max-w-[176px] sm:w-full !w-[250px] sm:h-[339px] h-[160px] sm:p-[24px] p-[16px] flex flex-col justify-between">
              <div>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFE600] text-[18px] font-[400] leading-[24.3px] mb-[14px]"
                >
                  1.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] sm:text-[32px] text-[16px] font-[500] sm:leading-[48px] leading-[21.6px]"
                >
                  Create Data set.
                </p>
              </div>
              <div className="bg-[#FFFFFF2E] h-[48px] flex gap-[8px] items-center rounded-full p-[4px] pr-[24px]">
                <img
                  src="/assets/tech/item4.svg"
                  className="sm:h-auto h-[24px] sm:w-auto w-[24px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[14px] font-[400] leading-[24.3px] text-[#FFFFFF]"
                >
                  Data Scientist
                </p>
              </div>
            </div>
            <div className="bg-[#B50000] sm:max-w-[248px] max-w-[176px] sm:w-full !w-[250px] sm:h-[339px] h-[160px] sm:p-[24px] p-[16px] flex flex-col justify-between">
              <div>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFE600]  text-[18px] font-[400] leading-[24.3px] mb-[14px]"
                >
                  2.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] sm:text-[32px] text-[16px] font-[500] sm:leading-[48px] leading-[21.6px]"
                >
                  Annotate agents and actions.
                </p>
              </div>
              <div className="bg-[#FFFFFF2E] h-[48px] flex gap-[8px] items-center rounded-full p-[4px] pr-[24px]">
                <img
                  src="/assets/tech/item5.svg"
                  className="sm:h-auto h-[24px] sm:w-auto w-[24px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[14px] font-[400] leading-[24.3px] text-[#FFFFFF]"
                >
                  Annotators
                </p>
              </div>
            </div>
            <div className="bg-[#9F0000] sm:max-w-[248px] max-w-[176px] sm:w-full !w-[250px] sm:h-[339px] h-[160px] sm:p-[24px] p-[16px] flex flex-col justify-between">
              <div>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFE600]  text-[18px] font-[400] leading-[24.3px] mb-[14px]"
                >
                  3.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] sm:text-[32px] text-[16px] font-[500] sm:leading-[48px] leading-[21.6px]"
                >
                  Validate annotated data.
                </p>
              </div>
              <div className="bg-[#FFFFFF2E] h-[48px] flex gap-[8px] items-center rounded-full p-[4px] pr-[24px]">
                <img
                  src="/assets/tech/item6.svg"
                  className="relative top-[5px] sm:h-auto h-[24px] sm:w-auto w-[24px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[14px] font-[400] leading-[24.3px] text-[#FFFFFF]"
                >
                  Validators
                </p>
              </div>
            </div>
            <div className="bg-[#7E0000] sm:max-w-[248px] max-w-[176px] sm:w-full !w-[250px] sm:h-[339px] h-[160px] sm:p-[24px] p-[16px] flex flex-col justify-between">
              <div>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFE600]  text-[18px] font-[400] leading-[24.3px] mb-[14px]"
                >
                  4.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] sm:text-[32px] text-[16px] font-[500] sm:leading-[48px] leading-[21.6px]"
                >
                  Develop training model.
                </p>
              </div>
              <div className="bg-[#FFFFFF2E] h-[48px] flex gap-[8px] items-center rounded-full p-[4px] pr-[24px]">
                <img
                  src="/assets/tech/item4.svg"
                  className=" sm:h-auto h-[24px] sm:w-auto w-[24px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[14px] font-[400] leading-[24.3px] text-[#FFFFFF]"
                >
                  Data Scientist
                </p>
              </div>
            </div>
            <div className="bg-[#4F0000] sm:max-w-[248px] max-w-[176px] sm:w-full !w-[250px] sm:h-[339px] h-[160px] sm:p-[24px] p-[16px] flex flex-col justify-between">
              <div>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFE600]  text-[18px] font-[400] leading-[24.3px] mb-[14px]"
                >
                  5.
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[#FFFFFF] sm:text-[32px] text-[16px] font-[500] sm:leading-[48px] leading-[21.6px]"
                >
                  Test & deploy model
                </p>
              </div>
              <div className="bg-[#FFFFFF2E] h-[48px] flex gap-[8px] items-center rounded-full p-[4px] pr-[24px]">
                <img
                  src="/assets/tech/item4.svg"
                  className=" sm:h-auto h-[24px] sm:w-auto w-[24px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[14px] font-[400] leading-[24.3px] text-[#FFFFFF]"
                >
                  Data Scientist
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-[20px] sm:px-[100px] sm:py-[160px] py-[42px] sm:flex-row flex-col items-start sm:gap-[25px] gap-[8px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="max-w-[292px] w-full sm:text-[20px] text-[12px] font-[700] sm:leading-[27px] leading-[15.6px] text-[#DC1933]"
          >
            BUSINESS GOALS
          </p>
          <div className="w-full">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:pb-[38px] pb-[12px] sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.2px] text-[#FFFFFF]"
            >
              The project aims to enhance manufacturing{" "}
              <span className="underline">efficiency,</span> improve&nbsp;
              <span className="underline">product quality,</span> reduce&nbsp;
              <span className="underline">operational costs,</span> and
              achieve&nbsp;
              <span className="underline">scalability&nbsp;</span>
              &nbsp;and <span className="underline">adaptability</span> in
              assembly line operations.
            </p>
            <div className="bg-[#DC1933] w-[80px] h-[4px] mb-[38px]"></div>
            <div className="flex flex-row gap-[24px]">
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#2E2E2E] sm:px-[24px] px-[12px] sm:py-[16px] py-[8px] rounded-[80px] sm:text-[20px] text-[14px] font-[700] sm:leading-[27px] leading-[18.9px] text-[#FFFFFF]"
              >
                Effecient
              </button>
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#2E2E2E] sm:px-[24px] px-[12px] sm:py-[16px] py-[8px]  rounded-[80px] sm:text-[20px] text-[14px] font-[700] sm:leading-[27px] leading-[18.9px] text-[#FFFFFF]"
              >
                Scalable
              </button>
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#2E2E2E] sm:px-[24px] px-[12px] sm:py-[16px] py-[8px]  rounded-[80px] sm:text-[20px] text-[14px] font-[700] sm:leading-[27px] leading-[18.9px] text-[#FFFFFF]"
              >
                Adaptable
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:px-[100px] px-[20px] sm:py-[160px] py-[60px] sm:flex-row flex-col items-start gap-[25px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="max-w-[292px] w-full  sm:text-[20px] text-[12px] font-[700] sm:leading-[27px] leading-[16px] text-[#FFFFFF]"
          >
            APPROACH
          </p>
          <div className="w-full flex flex-col gap-[30px]">
            <div className="flex sm:gap-[64px] justify-between gap-[10px]">
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a1.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Identifying the key users & intended use cases
                </p>
              </div>
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a2.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Investigating the possible loopholes limitations feasibilities
                </p>
              </div>
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a3.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Identifying the user journey, product lifecycle & touchpoint
                </p>
              </div>
            </div>
            <div className="flex sm:gap-[64px] justify-between gap-[10px]">
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a5.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Ideating & prototyping designs and getting feedback
                </p>
              </div>
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a4.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Feature benchmarking & competitor analysis
                </p>
              </div>
              <div className="flex max-w-[187px] w-full flex-col sm:gap-[24px] gap-[8px] relative items-center">
                <img
                  src="/assets/tech/a4.svg"
                  className="sm:h-auto sm:w-auto h-[32px] w-[32px]"
                  alt=""
                />
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-center sm:text-[16px] text-[10px] font-[500] sm:leading-[22px] leading-[13.5px] text-[#FFFFFF] sm:max-w-[187px] max-w-[97.12px] w-full"
                >
                  Heaurtistic evaluation of existing product
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] sm:pt-[200px] pt-[60px] sm:pb-[100px] pb-[60px] sm:px-[100px] px-[20px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#FFFFFF]  pb-[100px] sm:text-[80px] text-[24px] font-[700] sm:leading-[90px] leading-[32.4px]"
          >
            Meet the <span className="text-[#FF2C48]"> heroes</span> of our
            product.
          </p>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row sm:gap-[24px] gap-[20px]">
              <div className="w-full">
                <img
                  src="/assets/tech/photo2.png"
                  className="sm:h-[300px] h-[215px] w-[502px] bg-cover bg-center"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[32px] text-[20px] font-[500] sm:leading-[48px] leading-[27px] text-[#FFFFFF]"
                >
                  Maria Nicolas
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] text-[#FFFFFF]"
                >
                  32, Female
                </p>
                <button
                  style={{ fontFamily: "Satoshi" }}
                  className="my-[24px] bg-[#FF2C48] px-[12px] py-[8px] sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] text-[#FFFFFF]"
                >
                  Data Scientist
                </button>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] opacity-[0.5] text-[#FFFFFF]"
                >
                  Alicia holds a master's degree in data science and has several
                  years of experience in machine learning and computer vision.
                  She is passionate about harnessing AI to solve real-world
                  problems.
                </p>
              </div>
            </div>
            <div className="flex gap-[24px] flex-row w-full">
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:mt-[60px] mt-[0px] pb-[4px] sm:text-[14px] text-[12px] font-[700] sm:leading-[18.9px] leading-[16.2px] text-[#FFB545]"
                >
                  Challenges
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
                >
                  Ensuring the quality and diversity of training data,
                  Collaborating effectively with annotators and validators.
                </p>
              </div>
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:mt-[60px] mt-[0px]  pb-[4px] sm:text-[14px] text-[12px] font-[700] sm:leading-[18.9px] leading-[16.2px] text-[#76D68B]"
                >
                  Motivation & Goals
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className=" sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
                >
                  Efficient dataset creation, Improving AI model accuracy,
                  Successfully implementing AI solutions to enhance
                  manufacturing.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF33] sm:my-[100px] my-[50px] h-[1px] max-w-[1240px] w-full m-auto"></div>
          <div className="flex flex-col sm:gap-[24px] gap-[20px]">
            <div className="flex flex-row-reverse sm:gap-[24px] gap-[20px]">
              <div className="w-full">
                <img
                  src="/assets/tech/photo3.png"
                  className="sm:h-[300px] h-[215px] w-[502px] bg-cover bg-center"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[32px] text-[20px] font-[500] sm:leading-[48px] leading-[27px] text-[#FFFFFF]"
                >
                  James Nortan
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] text-[#FFFFFF]"
                >
                  28, Male
                </p>
                <button
                  style={{ fontFamily: "Satoshi" }}
                  className="my-[24px] bg-[#FF2C48] px-[12px] py-[8px] sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] text-[#FFFFFF]"
                >
                  Annotator & Validator
                </button>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[18px] text-[12px] font-[500] sm:leading-[24.3px] leading-[16.2px] opacity-[0.5] text-[#FFFFFF]"
                >
                  James has a background in computer science and is skilled in
                  image annotation. He has experience in accurately labeling
                  data for AI model training.
                </p>
              </div>
            </div>
            <div className="flex sm:gap-[24px] gap-[20px] flex-row w-full">
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:mt-[60px] mt-[0px] pb-[4px] sm:text-[14px] text-[12px] font-[700] sm:leading-[18.9px] leading-[16.2px] text-[#FFB545]"
                >
                  Challenges
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
                >
                  Maintaining annotation accuracy and consistency, Collaborating
                  effectively within the team and the only source of truth to
                  refer in case of complex labels/annotation.
                </p>
              </div>
              <div className="w-full">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:mt-[60px] mt-[0px] pb-[4px] sm:text-[14px] text-[12px] font-[700] sm:leading-[18.9px] leading-[16.2px] text-[#76D68B]"
                >
                  Motivation & Goals
                </p>
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
                >
                  Providing high-quality annotations, Supporting data scientists
                  in developing accurate AI models, Contributing to the
                  improvement of manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] sm:pt-[190px] pt-[60px] pb-[60px] sm:pb-[160px]">
          <div className="sm:pl-[100px] pl-[20px] justify-between items-center flex-row sm:pr-[73px] pr-[20px] sm:pb-[120px] pb-[50px] sm:gap-[100px] gap-[30px] flex">
            <div className="max-w-[292px] w-full">
              <div className="w-[80px] h-[4px] bg-[#DC1933] mb-[24px]"></div>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[32px] text-[14px] font-[500] sm:leading-[48px] leading-[18.9px] text-[#FFFFFF]"
              >
                Synchronised operations for seamless progress.
              </p>
            </div>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="w-full font-[700] sm:text-[200px] text-[24px] sm:leading-[200px] leading-[29.52px] text-right text-[#FFFFFF]"
            >
              workflow
            </p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1">
            <img src="/assets/tech/photo4.png" alt="" />
            <img src="/assets/tech/photo5.png" alt="" />
            <img src="/assets/tech/photo6.png" alt="" />
            <img src="/assets/tech/photo7.png" alt="" />
            <img src="/assets/tech/photo8.png" alt="" />
            <img src="/assets/tech/photo9.png" alt="" />
          </div>
        </div>
        <div className="bg-[#16161a] overflow-hidden sm:mb-[-190px] mb-0 sm:pt-[240px] pt-[42px] sm:pr-[100px] pr-0">
          {/* <img src="/assets/tech/photo11.png" alt="" /> */}
          <div className="flex relative sm:gap-[94px] gap-[30px] sm:flex-row items-center flex-col-reverse sm:left-[-37px] left-0 sm:px-0 px-[20px] overflow-hidden">
            <img src="/assets/tech/photo10.png" alt="" />
            <div className="sm:max-w-[422px] max-w-full relative w-full">
              <img
                src="/assets/tech/icon9.svg"
                className="absolute sm:block hidden left-[-86px] top-[117px]"
                alt=""
              />
              <img
                src="/assets/tech/icon10.svg"
                className="absolute sm:block hidden left-[-50px] top-[207px]"
                alt=""
              />
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#FFFFFF]"
              >
                Project & Dataset
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF]"
              >
                Each card on left represents a product/project that has to go
                under an assembly line.
              </p>
              <div className="w-[80px] h-[4px] bg-[#DC1933] sm:my-[24px] my-[8px]"></div>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF]"
              >
                Each card below represents the video data sets to be annotated.
              </p>
              <div className="w-[80px] h-[4px] bg-[#DC1933] sm:my-[24px] my-[8px]"></div>
            </div>
          </div>
          <div className="overflow-hidden sm:flex hidden items-end relative top-[-190px] right-[-163px]">
            <img src="/assets/tech/icon11.svg" alt="" />
            <img src="/assets/tech/photo11.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#EDE7DC] overflow-hidden sm:pt-[252px] pt-[42px]">
        <div className="sm:pl-[100px] pl-[20px] w-full max-w-[608px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#000000]"
          >
            Project & Dataset
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#000000]"
          >
            AI precision: Automated video sampling simplified.
          </p>
          <div className="w-[80px] h-[4px] bg-[#DC1933] sm:mt-[24px] mt-[8px]"></div>
        </div>
        <img
          src="/assets/tech/photo13.png"
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-[#16161a] overflow-hidden sm:mb-[-190px] mb-0 sm:pb-0 pb-[60px] sm:pt-[240px] pt-[60px] sm:pr-[100px] pr-0">
        {/* <img src="/assets/tech/photo11.png" alt="" /> */}
        <div className="flex sm:flex-row flex-col-reverse relative sm:gap-[94px] gap-[40px] sm:left-[-37px] left-0 sm:px-0 px-[20px] overflow-hidden">
          <img src="/assets/tech/photo10.png" alt="" />
          <div className="relative w-full">
            <img
              src="/assets/tech/icon9.svg"
              className="absolute left-[-86px] top-[117px]"
              alt=""
            />
            <img
              src="/assets/tech/icon10.svg"
              className="absolute  left-[-50px] top-[207px]"
              alt=""
            />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#FFFFFF]"
            >
              Video/Image/Agent Annotation
            </p>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#FFFFFF]"
            >
              Empowering data understanding, mark by mark. Unlock insights with
              precision.
            </p>
            <div className="w-[80px] h-[4px] bg-[#DC1933] sm:my-[24px] my-[8px]"></div>
            <div className="flex pt-[16px] flex-row gap-[12px]">
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#2E2E2E] sm:px-[24px] px-[8px] sm:py-[16px] py-[8px] rounded-[80px] sm:text-[20px] text-[12px] font-[700] sm:leading-[27px] leading-[16.2px] text-[#FFFFFF]"
              >
                Video Annotation
              </button>
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#2E2E2E] sm:px-[24px] px-[8px] sm:py-[16px] py-[8px] rounded-[80px] sm:text-[20px] text-[12px] font-[700] sm:leading-[27px] leading-[16.2px] text-[#FFFFFF]"
              >
                Multi-Agent Annotation
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex hidden overflow-hidden items-end relative top-[-190px] right-[-163px]">
          <img src="/assets/tech/icon11.svg" alt="" />
          <img src="/assets/tech/photo11.png" alt="" />
        </div>
      </div>
      <div className="bg-[#EDE7DC] overflow-hidden sm:pt-[252px] pt-[42px]">
        <div className="sm:pl-[100px] pl-[20px] w-full max-w-[608px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#000000]"
          >
            AI Confusion Metrics
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#000000]"
          >
            Evaluating variation between human annotations and AI predictions
            for precise insights.
          </p>
          <div className="w-[80px] h-[4px] bg-[#DC1933] sm:mt-[24px] mt-[8px]"></div>
        </div>
        <img
          src="/assets/tech/photo14.png"
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-[#EDE7DC] overflow-hidden sm:pt-[252px] pt-[42px]">
        <div className="flex">
          <div className="sm:flex hidden flex-1"></div>
          <div className="flex flex-1 w-full">
            <div className="sm:pl-[100px] pl-[20px] w-full max-w-[608px]">
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#000000]"
              >
                Model Training & Testing
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#000000]"
              >
                Mastering every step for exceptional performance and
                reliability.
              </p>
              <div className="w-[80px] h-[4px] bg-[#DC1933] sm:mt-[24px] mt-[8px]"></div>
            </div>
          </div>
        </div>
        <img
          src="/assets/tech/photo15.png"
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-[#EDE7DC] overflow-hidden sm:pt-[252px] pt-[42px]">
        <div className="sm:pl-[100px] pl-[20px] w-full max-w-[608px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#000000]"
          >
            Training model results
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#000000]"
          >
            Unleashing mechanical marvels: The triumphs of model training in
            precision engineering.
          </p>
          <div className="w-[80px] h-[4px] bg-[#DC1933] mt-[24px]"></div>
        </div>
        <img
          src="/assets/tech/photo16.png"
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-[#FFFFFF] overflow-hidden sm:pb-0 pb-[60px] sm:mb-[-190px] mb-0 sm:pt-[240px] pt-[42px] sm:pr-[100px] pr-0">
        <div className="flex relative sm:flex-row flex-col-reverse sm:gap-[94px] gap-[40px] sm:px-0 px-[20px] sm:left-[-37px] left-0 overflow-hidden">
          <img src="/assets/tech/photo10.png" alt="" />
          <div className="relative w-full">
            <img
              src="/assets/tech/icon9.svg"
              className="absolute sm:block hidden left-[-86px] top-[117px]"
              alt=""
            />
            <img
              src="/assets/tech/icon10.svg"
              className="absolute sm:block hidden left-[-50px] top-[207px]"
              alt=""
            />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[48px] text-[24px] sm:pb-[24px] pb-[8px] font-[700] sm:leading-[64.8px] leading-[32.4px] text-[#000000]"
            >
              Deployed Model
            </p>
            <p
              style={{ fontFamily: "Satoshi" }}
              className="sm:text-[28px] text-[14px] font-[400] sm:leading-[36px] leading-[18.9px] text-[#000000]"
            >
              Revolutionising the factory floor: Model deployment at the
              workstation.
            </p>
            <div className="w-[80px] h-[4px] bg-[#DC1933] sm:my-[24px] my-[12px]"></div>
            <div className="flex flex-row gap-[12px]">
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#FFF0CA] sm:px-[24px] px-[8px] sm:py-[16px] py-[4px] rounded-[80px] sm:text-[20px] text-[12px] font-[400] sm:leading-[27px] leading-[16.2px] text-[#000000]"
              >
                AI-powered Worstations
              </button>
              <button
                style={{ fontFamily: "Satoshi" }}
                className="bg-[#FFF0CA]  sm:px-[24px] px-[8px] sm:py-[16px] py-[4px] rounded-[80px] sm:text-[20px] text-[12px] font-[400] sm:leading-[27px] leading-[16.2px] text-[#000000]"
              >
                Real-time Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex hidden overflow-hidden items-end relative top-[-190px] right-[-163px]">
          <img src="/assets/tech/icon11.svg" alt="" />
          <img src="/assets/tech/photo11.png" alt="" />
        </div>
      </div>
      <div className="bg-[#000000] overflow-hidden sm:px-[100px] px-[20px] sm:pt-[160px] pt-[60px] sm:pb-[97px] pb-[60px]">
        <p
          style={{ fontFamily: "Satoshi" }}
          className="sm:text-[100px] text-[24px] font-[700] sm:leading-[135px] leading-[32.4px] text-left text-[#FFFFFF]"
        >
          Transforming Assembly Line Excellence
        </p>
      </div>
      <div className="flex bg-[#AA1227] overflow-hidden flex-row">
        <img
          src="/assets/tech/photo12.png"
          className="sm:w-auto w-[195px]"
          alt=""
        />
        <div className="sm:py-[172px] py-[60px] flex flex-col overflow-hidden gap-[40px] sm:px-[100px] px-[20px] relative">
          <img
            src="/assets/home/wrap-1.svg"
            className="absolute right-[-316px] top-[-420px]"
            alt=""
          />
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#ffffff]"
          >
            In the grand narrative of manufacturing, "LineSense" has emerged as
            the protagonist, reshaping the landscape of assembly line
            efficiency.
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] sm:text-[24px] text-[14px] sm:leading-[36px] leading-[18.9px] text-[#ffffff]"
          >
            From the inception of data creation to the deployment of AI models
            on workstations, we've embarked on a journey that redefines
            precision in mechanical engineering.
          </p>
        </div>
      </div>
      <div className="bg-[#EDE7DC] flex sm:flex-row flex-col overflow-hidden sm:px-[100px] px-[16px] sm:pt-[160px] pt-[42px] sm:pb-[208px] pb-[60px] gap-[25px]">
        <div className="max-w-[292px] w-full">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#DC1933] font-[700] sm:text-[20px] text-[12px] sm:leading-[27px] leading-[15.6px] sm:pb-[32px] pb-[8px]"
          >
            DOMAIN LEARNINGS
          </p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#000000] font-[500] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.2px]"
          >
            With "LineSense," we've not only streamlined operations but also
            elevated product quality and reduced operational costs.
          </p>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[#000000] font-[500] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.2px]"
          >
            We stand at the crossroads of innovation, armed with scalability and
            adaptability, ready to write new chapters in manufacturing
            excellence.
          </p>
        </div>
      </div>
      <div className="bg-[#BD2235] sm:px-[100px] px-[20px] sm:pt-[80px] pt-[42px] pb-[42px] sm:pb-[128px]">
        <p
          style={{ fontFamily: "Satoshi" }}
          className="font-[400] sm:text-[32px] text-[14px] sm:leading-[48px] leading-[18.2px] text-center text-[#FFFFFF] mb-[24px]"
        >
          The product is in it’s Beta stage, and might come out very soon
        </p>
        <p
          style={{ fontFamily: "Satoshi" }}
          className="font-clash font-[400] max-w-[984px] w-full m-auto sm:text-[60px] text-[24px] sm:leading-[90px] leading-[31.2px] text-[#FFFFFF] sm:text-center text-left"
        >
          Thank you for being a part of the "TypeFace" story.
        </p>
      </div>
      <div className="bg-[#1A1D24] flex items-center justify-between w-full sm:py-[80px] py-[16px] px-[16px] sm:px-[70px]">
        <Link to="/indulekha">
          <div className="flex items-center gap-[20px]">
            <img src="/assets/home/left-btn.svg" alt="" />
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[32px ] text-center text-[#FFFFFF]"
            >
              Indulekha
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="font-[500] text-[14px] sm:text-[32px] sm:leading-[43.2px] leading-[32px ] text-center text-[#FFFFFF]"
            >
              Reclaimz
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
            src="/assets/home/photo19.png"
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

export default Tech;
