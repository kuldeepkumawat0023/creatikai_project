"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { LiaRobotSolid } from "react-icons/lia";
import { AiTwotoneSound } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";

import { BiRightArrowAlt } from "react-icons/bi";

import { TiTick } from "react-icons/ti";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Ai_Chatbot() {
  const topics = [
    "What AI Features are available in the Creatik AI WordPress Theme?",
    "Does Creatik AI Theme have a Support Portal?",
    "How can I monetize AI Features?",
    "What do I need to have to utilize AI Tools?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  // ✅ Clicking topic only fills the input box (no response yet)
  const handleTopicClick = (topic: string) => {
    setInputValue(topic);
  };

  // ✅ Only when Send is clicked → show question + answer (and clear old chat)
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const aiReply = getAIReply(inputValue);

    // Clear previous chat and show only current Q&A
    setMessages([
      { sender: "user", text: inputValue },
      { sender: "ai", text: aiReply },
    ]);

    setInputValue("");
  };

  // Fake AI function (replace with API later)
  const getAIReply = (question: string) => {
    if (question.toLowerCase().includes("ai features")) {
      return "Creatik AI Theme includes AI-powered content generation, image tools, and SEO optimization.";
    }
    if (question.toLowerCase().includes("support")) {
      return "Yes! Creatik AI Theme includes a dedicated support portal for registered users.";
    }
    if (question.toLowerCase().includes("monetize")) {
      return "You can monetize AI features through premium access or pay-per-use tools.";
    }
    if (question.toLowerCase().includes("utilize") || question.toLowerCase().includes("ai tools")) {
      return "To utilize AI Tools, you need a valid OpenAI API key and proper theme configuration.";
    }
    return "That's a great question! Please check the documentation or contact support for more info.";
  };


  // Character typing effect
  const phrases = ["-joy", "-pride", "-style"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: number;

    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseAfterTyping = 500;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        typingTimeout = window.setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        typingTimeout = window.setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      }
    } else {
      if (charIndex > 0) {
        typingTimeout = window.setTimeout(() => {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => window.clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);


  return (
    <>
      <section className="px-4 md:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Text Section */}
          <div className="pt-10 md:pt-[50px] p-3 flex flex-col justify-center md:pr-[100px]">
            <h2 className="uppercase text-lg sm:text-xl md:text-[18px] font-serif mb-2">
              Optimize Your Business Growth
            </h2>

            <h3 className="text-3xl sm:text-4xl md:text-[55px] font-bold mb-4">
              Super ChatBot automating{" "}
              <FiArrowRight className="inline-block ml-2 text-sky-600" /> customer service
            </h3>

            <p className="text-base sm:text-lg md:text-[22px] text-gray-500 mb-6">
              I can assist with common issues or connect you to an agent for more complex needs.
            </p>

            <button
              type="button"
              className="p-3 sm:p-4 bg-sky-600 text-white rounded hover:bg-sky-700 flex items-center gap-2 w-max"
            >
              Get started <FiArrowRight />
            </button>
          </div>

          <div className="py-8 md:pt-[100px] flex justify-center items-center relative">
            {/* Static Left Image - Positioned Overlapping */}
            <div
              className="absolute left-[10%] sm:left-[0%] md:left-[-20%] 
    w-[180px] sm:w-[220px] md:w-[280px] h-[322px] sm:h-[300px] md:h-[500px]
    rounded-xl overflow-hidden  z-20"
            >
              <img
                src="/chat2.jpg"
                alt="Side Poster"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute hidden sm:block left-[10%] sm:left-[20%] md:left-[25%] top-[20%]
    w-[22px] sm:w-[30px] md:w-[100px] h-[22px] sm:h-[50px] md:h-[90px]
    rounded overflow-hidden z-20"
            >
              <img
                src="/chat-decor.jpg"
                alt="Side Poster"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Motion (Hover-Change) Image - Background / Main */}
            <motion.div
              className="relative w-[250px] sm:w-[300px] md:w-[420px] h-[350px] sm:h-[450px] md:h-[600px]
    rounded-xl overflow-hidden shadow-2xl cursor-pointer z-10"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Base Poster */}
              <motion.img
                src="/ch1img.jpg"
                alt="Movie Poster"
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* Hover Poster */}
              <motion.img
                src="/ch2img.jpg"
                alt="Movie Poster Hover"
                className="absolute inset-0 w-full h-full object-cover"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>


        </div>
      </section>

      <section className="px-4 md:px-[120px] py-10">
        {/* Heading */}
        <div className="text-center pt-[50px] sm:pt-[90px] md:pt-[100px]">
          <h2 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-gray-900">
            AI Chat Bot
          </h2>
        </div>

        {/* Logo Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 justify-items-center items-center py-6"
        >
          <img
            src="/openai-1.jpg"
            alt="openai-1"
            className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] object-contain"
          />
          <img
            src="/openai-2.jpg"
            alt="openai-2"
            className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] object-contain"
          />
          <img
            src="/openai-3.jpg"
            alt="openai-3"
            className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] object-contain"
          />
          <img
            src="/flowiseai.jpg"
            alt="flowiseai"
            className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] object-contain"
          />
          <img
            src="/gemini.jpg"
            alt="gemini"
            className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[45px] md:h-[50px] object-contain"
          />
        </div>


        <div className="text-black flex flex-col px-4 sm:px-6 md:px-8">
          {/* Suggested Topics */}
          <h2 className="text-2xl font-bold mb-2">Suggested Topics</h2>
          <ul className="list-decimal pl-4 p-2 space-y-1">
            {topics.map((topic, i) => (
              <li
                key={i}
                onClick={() => handleTopicClick(topic)}
                className="cursor-pointer hover:text-green-600 transition-colors break-words"
              >
                {topic}
              </li>
            ))}
          </ul>

          {/* Chatbox */}
          <div className="bg-gray-100 rounded mt-6 flex flex-col w-full max-w-full">
            <div>
              <h2 className="bg-black text-white text-2xl p-3">How can I help you?</h2>
            </div>

            {/* Chat display */}
            <div className="max-h-64 sm:max-h-80 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg ${msg.sender === "user"
                    ? "bg-green-500 text-white self-end text-right"
                    : "bg-white text-gray-800"
                    } break-words`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input and button */}
            <div className="flex flex-col sm:flex-row items-center w-full p-3 border-t border-gray-200 gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 h-12 px-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-gray-600 text-[16px] sm:text-[18px] text-gray-700 placeholder-gray-400 w-full sm:w-auto"
              />
              <button
                type="button"
                onClick={handleSend}
                className="h-12 px-5 w-full sm:w-auto bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>




      </section>

      <section className="px-4 md:px-[120px] md:py-5">
        <div className="text-center justify-center">
          <h2 className="uppercase font-serif text-[15px]">the motto</h2>
          <h3 className=" text-2xl md:text-[60px] font-bold text-center font-sans">The main goal for us <br /> is your result!</h3>
        </div>
        <div className="py-7 px-4">
          <Swiper
            spaceBetween={20} // default spacing
            loop={true} // infinite scroll
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // mobile
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 2, // tablets
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // desktop
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 duration-300 group overflow-hidden">
                <LiaRobotSolid className="text-4xl md:text-[90px] bg-sky-100 p-2 md:p-4 rounded-full text-sky-500 mb-4 group-hover:text-sky-700 transition-colors duration-300" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Endless Possibilities</h2>
                <p className="text-gray-400 p-3">
                  AI unlocks endless possibilities by enhancing efficiency and innovation. It transforms industries and daily life with smart, automated solutions.
                </p>
                {/* Button */}
                <div className="">
                  <div className="flex items-center bg-sky-300 text-white px-4 py-2 rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
        w-[55px] group-hover:w-[150px]">

                    <BiRightArrowAlt className="text-2xl flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-1" />

                    <span className="text-sm ml-2 whitespace-nowrap opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 duration-300 group overflow-hidden">

                {/* Icon */}
                <AiTwotoneSound className="text-4xl md:text-[90px] bg-sky-100 p-2 md:p-4  rounded-full text-sky-500 mb-4 transition-colors duration-300 group-hover:text-sky-700" />

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Super Clean Code</h2>

                {/* Description */}
                <p className="text-gray-400 p-3">
                  Super Clean Code is readable and maintainable, following best practices and standards.
                  It ensures efficiency and reduces bugs through simplicity and clarity.
                </p>

                {/* Button */}
                <div className="">
                  <div className="flex items-center bg-sky-300 text-white px-4 py-2 rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
        w-[55px] group-hover:w-[150px]">

                    <BiRightArrowAlt className="text-2xl flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-1" />

                    <span className="text-sm ml-2 whitespace-nowrap opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      Read More
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 duration-300 group overflow-hidden">
                <MdSupportAgent className="text-4xl md:text-[90px] bg-sky-100 p-2 md:p-4  rounded-full text-sky-500 mb-4 group-hover:text-sky-700 transition-colors duration-300" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Free Updates & Support</h2>
                <p className="text-gray-400 p-3">
                  Enjoy free updates and support, ensuring your system stays current and problem-free. We're here  help whenever you need us.
                </p>
                {/* Button */}
                <div className="">
                  <div className="flex items-center bg-sky-300 text-white px-4 py-2 rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
        w-[55px] group-hover:w-[150px]">

                    <BiRightArrowAlt className="text-2xl flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-1" />

                    <span className="text-sm ml-2 whitespace-nowrap opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 duration-300 group overflow-hidden">
                <MdAttachEmail className="text-4xl md:text-[90px] bg-sky-100 p-2 md:p-4  rounded-full text-sky-500 mb-4 group-hover:text-sky-700 transition-colors duration-300" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Online Communication</h2>
                <p className="text-gray-400 p-3">
                  AI enhances online communication with real-time translation, sentiment analysis, and automated responses. It ensures efficient and effective interactions.
                </p>
                {/* Button */}
                <div className="">
                  <div className="flex items-center bg-sky-300 text-white px-4 py-2 rounded-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
        w-[55px] group-hover:w-[150px]">

                    <BiRightArrowAlt className="text-2xl flex-shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-1" />

                    <span className="text-sm ml-2 whitespace-nowrap opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


      </section>
      <section className="relative bg-white px-4 sm:px-8 lg:px-[120px] py-10 overflow-hidden">

        {/* 🔹 Background Shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[800px] h-[250px] md:h-[800px] bg-transparent sm:bg-sky-50 rounded-2xl z-0 opacity-80"></div>

        {/* 🔸 Main Content Grid */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* 🖼️ Left Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="flex justify-center items-center">
              <div className="relative group w-full max-w-[300px] h-[450px] sm:h-[300px] md:h-[450px]">
                <img
                  src="/support-chat.jpg"
                  alt="Support Chat"
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex justify-center items-center">
              <div className="relative group w-full max-w-[300px] h-[450px] sm:h-[300px] md:h-[450px]">
                <img
                  src="/support-chat2.jpg"
                  alt="Support Chat 2"
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

          {/* ✨ Right Text Section */}
          <motion.div
            className="relative z-10 flex flex-col justify-center items-start text-center md:text-left text-white px-2 sm:px-6 md:px-10 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="uppercase text-[12px] sm:text-[18px] font-serif text-black md:mt-10">
              Creative Approach
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold font-sans mt-4
                     bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                     bg-clip-text text-transparent leading-snug">
              We work to make your life easier!
            </h2>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-6 max-w-[500px] leading-relaxed mx-auto md:mx-0">
              We work to make your life easier with innovative solutions and dedicated support, ensuring convenience and satisfaction every step of the way.
            </p>

            <ul className="text-gray-900 py-3 space-y-2">
              <li className="flex justify-center md:justify-start items-center">
                <TiTick className="text-2xl text-sky-700 mr-3" /> Innovative Solutions
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <TiTick className="text-2xl text-sky-700 mr-3" /> Dedicated Support
              </li>
              <li className="flex justify-center md:justify-start items-center">
                <TiTick className="text-2xl text-sky-700 mr-3" /> Continuous Improvement
              </li>
            </ul>

            <button
              type="button"
              className="bg-sky-500 rounded-lg text-white text-sm sm:text-base md:text-lg hover:bg-sky-600 px-5 py-2 sm:px-6 sm:py-3 transition mx-auto md:mx-0"
            >
              About us
            </button>
          </motion.div>
        </div>
      </section>
      <section className=" py-5 md:px-[120px]">
        <div className="text-center justify-center pt-[100px]">
          <h2 className=" text-[13px] sm:text-[15px] uppercase text-black font-serif">Who We Are</h2>
          <h3 className="text-black font-bold text-center text-[20px] md:text-3xl md:text-[50px]">
            Explore the power of AI tools,<br />
            developed with ingenuity, <br />
            brilliance, quality and
            <span className="inline-block ">
              {text}
            </span>
          </h3>
        </div>
        <div className="text-center py-10">
          <h2 className="text-black font-semibold text-[18px] ">Sharan Goyal</h2>
          <p className="text-gray-400 text-[18px]">Creative Director</p>
        </div>


      </section>
      <section className="bg-gray-300 px-4 md:px-[120px]">
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          <img src="/partner-3_1.png" alt="partner1" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
          <img src="/partner-3_2.png" alt="partner2" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
          <img src="/partner-3_3.png" alt="partner3" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
          <img src="/partner-3_4.png" alt="partner4" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
          <img src="/partner-3_5.png" alt="partner5" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
          <img src="/partner-3_6.png" alt="partner6" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
        </div>
      </section>
      <section className=" px-4 md:px-[120px]">
        <div className="py-7 px-4">
          <Swiper
            spaceBetween={20} // default spacing
            loop={true} // infinite scroll
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // mobile
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 2, // tablets
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2, // desktop
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-sky-100 rounded-lg shadow-md p-6 flex flex-col items-start text-start hover:scale-105 duration-300 group overflow-hidden">
                <FaQuoteRight className="text-4xl md:text-[90px]  p-2 md:p-4 rounded-full text-blue-500 mb-4 group-hover:text-blue-700 transition-colors duration-300" />

                <p className="text-gray-400 p-3 text-[22px]">
                  AI unlocks endless possibilities by enhancing efficiency and innovation. It transforms industries and daily life with smart, automated solutions.
                </p>
                <img src="/bs8img.jpg" alt="bs6" className="size-20 rounded-full" />
                <p className="text-white">
                  Mary Farrell <br />
                  <span className="text-gray-500">AI Expert</span></p>


              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-sky-100 rounded-lg shadow-md p-6 flex flex-col items-start text-start hover:scale-105 duration-300 group overflow-hidden">
                <FaQuoteRight className="text-4xl md:text-[90px]  p-2 md:p-4 rounded-full text-blue-500 mb-4 group-hover:text-blue-700 transition-colors duration-300" />



                {/* Description */}
                <p className="text-gray-400 p-3 text-[22px]">
                  Super Clean Code is readable and maintainable, following best practices and standards.
                  It ensures efficiency and reduces bugs through simplicity and clarity.
                </p>
                <img
                  src="/bs6img.jpg"
                  alt="Adrian Smith"
                  className="size-20 rounded-full object-cover"
                />
                <p className="text-white">

                  Adrian Smith <br />
                  <span className="text-gray-500">AI Tools Expert</span></p>



              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="bg-sky-100 rounded-lg shadow-md p-6 flex flex-col items-start text-start hover:scale-105 duration-300 group overflow-hidden">
                <FaQuoteRight className="text-4xl md:text-[90px]  p-2 md:p-4 rounded-full text-blue-500 mb-4 group-hover:text-blue-700 transition-colors duration-300" />

                <p className="text-gray-400 p-3 text-[22px]">
                  Enjoy free updates and support, ensuring your system stays current and problem-free. We're here  help whenever you need us.
                </p>
                <img
                  src="/bs7img.jpg"
                  alt=" Jane Farmer"
                  className="size-20 rounded-full object-cover"
                />
                <p className="text-white">
                  Jane Farmer <br />
                  <span className="text-gray-500">SEO Expert</span></p>

              </div>
            </SwiperSlide>


          </Swiper>
        </div>

      </section>




    </>
  )
}

export default Ai_Chatbot

