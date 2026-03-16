import React, { useRef, useState } from "react";
import Header from "../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { CustomCursor } from "../components/CustomCursor.jsx";
import HomeCard from "../components/HomeCard.jsx";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Generative AI Application",
    text: "helps businesses create personalised content uch as email campaigns, creative briefs, and online ads.",
    cardImg: "assets/home/home1.webp",
    cardLink: "/home",
  },
  {
    id: 2,
    title: "Indulekha’s Experience",
    text: "India’s most trusted haircare brand, owned by Hindustan Unilever.",
    cardImg: "assets/home/home2.webp",
    cardLink: "/indulekha",
  },
  {
    id: 3,
    title: "Healthcare Management",
    text: "Reclaimz is the all-in-one solution for healthcare IT needs, from practice management to data management and even invoice financing.",
    cardImg: "assets/home/home3.webp",
    cardLink: "/tech",
  },
  {
    id: 4,
    title: "LineSense Automation",
    text: "Powering assembly line efficiency with artificial intelligence, minimizing human errors.",
    cardImg: "assets/home/home4.webp",
    cardLink: "/tech",
  },
];

function Home1() {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const [direction, setDirection] = useState(0);
  const [selectH, setSelectH] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const bottomRef = useRef(null);

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="homepage-wrapper">
      <Header />
      <CustomCursor isVisible={isHoveringCard} />
      <div className="home-hero h-screen pt-[70px] overflow-hidden flex flex-col justify-between items-center gap-10 relative">
        <div
          className={`max-sm:h-screen flex  w-full m-auto flex-col items-center justify-center transition-opacity duration-300 ${
            selectH === "" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <img
              src="/assets/home/item6.svg"
              className="h-[280px] homepage-ignite-text"
              alt=""
            />
          </div>
          <p
            style={{ fontFamily: "Satoshi" }}
            className="font-[400] text-center text-[20px] sm:py-0 py-[50px] leading-[30px] text-[#FFFFFF]"
          >
            Hey 👋🏼, I'm Mihir Vaidya, A Product Designer.
          </p>
          <p className="font-Caveat font-[400] text-[18px] leading-[16px] text-[#B9BCDD] pt-[8px]">
            ...with over 2+ years of expertise.
          </p>
          <div className="flex sm:hidden items-end gap-[8px]">
            <p
              onClick={handleScrollToBottom}
              style={{ fontFamily: "Satoshi" }}
              className="font-[700] cursor-pointer text-[16px] leading-[14px] text-[#FFFFFF] pt-[56px] "
            >
              Scroll Down...
            </p>{" "}
            <img
              src="/assets/home/down-arrow.webp"
              className="animate-bounce"
              alt=""
            />
          </div>
        </div>

        {/* Typeface generative AI application */}
        <div
          className={`max-sm:hidden absolute top-[70px] left-1/2 -translate-x-1/2 bg-[#20232D66] container py-[30px] w-full m-auto rounded-[30px] border border-[#393B41] px-[62px] transition-opacity duration-300 ${
            selectH === "1" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setSelectH("1")}
          onMouseLeave={() => setSelectH("")}
        >
          <div className="flex justify-center items-center gap-[42px]">
            <div className="max-w-[589px]">
              <div className="flex items-center mb-[48px] gap-[14px]">
                <img src="/assets/home/i.webp" alt="" />
                <p className="font-satoshi text-white font-[700] text-[16px] leading-[21.6px]">
                  Typeface
                </p>
              </div>
              <p
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] pb-[16px] text-[32px] leading-[39.36px] text-[#FFFFFF]"
              >
                Generative AI Application
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] max-w-[419px] w-full pb-[32px] text-[16px] leading-[22.4px] text-[#FFFFFF]"
              >
                helps businesses create personalised content uch as email
                campaigns, creative briefs, and online ads.
              </p>
              {/* <div className="flex gap-[12px] items-center">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[24px] font-[700] leading-[32px] text-[#FFFFFF]"
                >
                  View Project
                </p>
                <img src="/assets/home/arrow-right.webp" alt="" />
              </div> */}
            </div>
            <div className="">
              <img src="/assets/home/a1.webp" className="h-[270px]" alt="" />
            </div>
          </div>
        </div>
        {/* Indulekha */}
        <div
          className={`max-sm:hidden absolute top-[70px] left-1/2 -translate-x-1/2 bg-[#20232D66] container py-[30px] w-full m-auto rounded-[30px] border border-[#393B41] px-[62px] transition-opacity duration-300 ${
            selectH === "2" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setSelectH("2")}
          onMouseLeave={() => setSelectH("")}
        >
          <div className="flex justify-center items-center gap-[42px]">
            <div className="max-w-[589px]">
              <div className="mb-[63px]">
                <img src="/assets/home/a2.webp" alt="" />
              </div>
              <p
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] pb-[16px] text-[32px] leading-[39.36px] text-[#FFFFFF]"
              >
                Indulekha’s Experience
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] max-w-[419px] w-full pb-[32px] text-[16px] leading-[22.4px] text-[#FFFFFF]"
              >
                India’s most trusted haircare brand, owned by Hindustan
                Unilever.
              </p>
              {/* <div className="flex gap-[12px] items-center">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[24px] font-[700] leading-[32px] text-[#FFFFFF]"
                >
                  View Project
                </p>
                <img src="/assets/home/arrow-right.webp" alt="" />
              </div> */}
            </div>
            <div className="">
              <img src="/assets/home/a3.webp" className="h-[270px]" alt="" />
            </div>
          </div>
        </div>

        {/* Reclaimz */}
        <div
          className={`max-sm:hidden absolute top-[70px] left-1/2 -translate-x-1/2 bg-[#20232D66] container py-[30px] w-full m-auto rounded-[30px] border border-[#393B41] px-[62px] transition-opacity duration-300 ${
            selectH === "3" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setSelectH("3")}
          onMouseLeave={() => setSelectH("")}
        >
          <div className="flex justify-center items-center gap-[42px]">
            <div className="max-w-[589px]">
              <div className="mb-[63px]">
                <img src="/assets/home/logo1.webp" alt="" />
              </div>
              <p
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] pb-[16px] text-[32px] leading-[39.36px] text-[#FFFFFF]"
              >
                Healthcare Management
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] max-w-[419px] w-full pb-[32px] text-[16px] leading-[22.4px] text-[#FFFFFF]"
              >
                Reclaimz is the all-in-one solution for healthcare IT needs,
                from practice management to data management and even invoice
                financing.
              </p>
              {/* <div className="flex gap-[12px] items-center">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[24px] font-[700] leading-[32px] text-[#FFFFFF]"
                >
                  View Project
                </p>
                <img src="/assets/home/arrow-right.webp" alt="" />
              </div> */}
            </div>
            <div className="">
              <img src="/assets/home/a4.webp" className="h-[270px]" alt="" />
            </div>
          </div>
        </div>

        {/* Tech Mahindra */}
        <div
          className={`max-sm:hidden absolute top-[70px] left-1/2 -translate-x-1/2 bg-[#20232D66] container py-[30px] w-full m-auto rounded-[30px] border border-[#393B41] px-[62px] transition-opacity duration-300 ${
            selectH === "4" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onMouseEnter={() => setSelectH("4")}
          onMouseLeave={() => setSelectH("")}
        >
          <div className="flex justify-center items-center gap-[42px]">
            <div className="max-w-[589px]">
              <div className="mb-[63px]">
                <img src="/assets/home/techm-logo.png" alt="" />
              </div>
              <p
                style={{ fontFamily: "ClashDisplay" }}
                className="font-[700] pb-[16px] text-[32px] leading-[39.36px] text-[#FFFFFF]"
              >
                LineSense Automation
              </p>
              <p
                style={{ fontFamily: "Satoshi" }}
                className="font-[400] max-w-[419px] w-full pb-[32px] text-[16px] leading-[22.4px] text-[#FFFFFF]"
              >
                Powering assembly line efficiency with artificial intelligence,
                minimizing human errors.
              </p>
              {/* <div className="flex gap-[12px] items-center">
                <p
                  style={{ fontFamily: "Satoshi" }}
                  className="text-[24px] font-[700] leading-[32px] text-[#FFFFFF]"
                >
                  View Project
                </p>
                <img src="/assets/home/arrow-right.webp" alt="" />
              </div> */}
            </div>
            <div className="">
              <img src="/assets/home/techm-mockup.webp" className="h-[270px]" alt="" />
            </div>
          </div>
        </div>

        {/* Desktop Project cards layout */}
        <div className="hidden gap-[20px] sm:flex w-full justify-between relative homepage-cards-container xl:container mt-auto">
          <div
            className={`duration-300 transition-all cursor-none ${
              selectH === "1"
                ? "rotate-[0deg] scale-110"
                : "rotate-[-5deg] translate-y-[15%]"
            }`}
            onMouseEnter={() => {
              setSelectH("1");
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => {
              setSelectH("");
              setIsHoveringCard(false);
            }}
          >
            <Link to="/home">
              <HomeCard src="/assets/home/home1.webp" alt="home1" />
            </Link>
          </div>

          <div
            className={`duration-300 transition-all cursor-none ${
              selectH === "2"
                ? "rotate-[0deg] scale-110"
                : "rotate-[-5deg] translate-y-[15%]"
            }`}
            onMouseEnter={() => {
              setSelectH("2");
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => {
              setSelectH("");
              setIsHoveringCard(false);
            }}
          >
            <Link to="/indulekha">
              <HomeCard src="/assets/home/home2.webp" alt="home2" />
            </Link>
          </div>

          <div
            className={`duration-300 transition-all cursor-none relative ${
              selectH === "3"
                ? "rotate-[0deg] scale-110"
                : "rotate-[-5deg] translate-y-[15%]"
            }`}
            onMouseEnter={() => {
              // setSelectH("3");
              // setIsHoveringCard(true);
            }}
            onMouseLeave={() => {
              // setSelectH("");
              // setIsHoveringCard(false);
            }}
          >
            <img src="/assets/coming-soon-tag.svg" alt="home3" className={`absolute transition-all duration-300 right-0 top-0 ${selectH === "3" ? "rotate-[0deg]" : "rotate-[5deg]"}`} />
            <Link to="#">
              <HomeCard src="/assets/home/home3.webp" alt="home3" />
            </Link>
          </div>

          <div
            className={`duration-300 transition-all cursor-none ${
              selectH === "4"
                ? "rotate-[0deg] scale-110"
                : "rotate-[-5deg] translate-y-[15%]"
            }`}
            onMouseEnter={() => {
              setSelectH("4");
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => {
              setSelectH("");
              setIsHoveringCard(false);
            }}
          >
            <Link to="/tech">
              <HomeCard src="/assets/home/home4.webp" alt="home4" />
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={bottomRef}
        className="sm:hidden overflow-hidden block relative min-h-[400px]"
      >
        {/* <p
          style={{ fontFamily: "Satoshi" }}
          className="font-[500] text-[14px] leading-[12.88px] text-center text-[#FFFFFF] pb-[32px]"
        >
          Selected Projects
          <span className="text-[#AD5BFF]">
            &nbsp;
            {`(${cards[currentIndex].id}/4)`}
          </span>
        </p> */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            className="absolute inset-0"
            style={{ width: "100%" }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
          >
            <div className="max-w-[358px] m-auto">
              {/* ... existing content ... */}
            </div>
            <div
              className={`duration-300 transition-all ${
                selectH === "8"
                  ? "rotate-[0deg] -translate-y-6"
                  : "rotate-[-5deg]"
              }`}
              onMouseEnter={() => setSelectH("8")}
              onMouseLeave={() => setSelectH("")}
            >
              <Link to={cards[currentIndex].cardLink}>
                <img
                  src={cards[currentIndex].cardImg}
                  className="h-[268px] w-[204px] m-auto"
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex mt-[47px] pb-[33px] justify-between px-[16px]">
          <button onClick={handlePrev}>
            <img src="/assets/left-arrow.svg" alt="" />
          </button>
          <button
            onClick={() => navigate(cards[currentIndex].cardLink)}
            style={{ fontFamily: "Satoshi" }}
            className="flex items-center justify-center gap-[8px] text-[13.5px] leading-[18.23px] text-[#FFFFFF] rounded-[24px] font-[700] border border-[#444A5B] bg-[#2E313ABF] py-[8px] px-[12px]"
          >
            View Project <img src="/assets/arrow.webp" alt="" />
          </button>
          <button onClick={handleNext}>
            <img src="/assets/right-arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home1;
