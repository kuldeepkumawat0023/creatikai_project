"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiHyperx, SiKashflow } from "react-icons/si";
import { GiTwirlyFlower } from "react-icons/gi";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrSend } from "react-icons/gr";

import { AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";



import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";

function Work_Flow_Automotion() {

  const phrases = [
    "joy",
    "pride",
    "style",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // ms per character
    const pauseAfterTyping = 500; // pause after full text is typed

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!deleting) {
        // Typing
        setText(currentPhrase.slice(0, charIndex + 1));
        if (charIndex + 1 === currentPhrase.length) {
          // Pause before deleting
          setTimeout(() => setDeleting(true), pauseAfterTyping);
        } else {
          setCharIndex((prev) => prev + 1);
        }
      } else {
        // Deleting
        setText(currentPhrase.slice(0, charIndex - 1));
        if (charIndex - 1 <= 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex((prev) => prev - 1);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // counter runs only once
  });

  // Start counters when section comes into view
  React.useEffect(() => {
    if (inView) {
      let interval1 = setInterval(() => {
        setCounter1((prev) => (prev < 100 ? prev + 1 : prev));
      }, 50);

      let interval2 = setInterval(() => {
        setCounter2((prev) => (prev < 56 ? prev + 1 : prev));
      }, 90);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, [inView]);

  const toggleFAQ = (read: any) => {
    setActiveIndex(activeIndex === read ? null : read);
  };
  {/* <Shell /> <Fingerprint /> */ }
  const faqs = [
    {
      question: "What is AI workflow automation?",
      answer:
        "AI workflow automation refers to the use of artificial intelligence to automate and optimize business processes. It involves AI-driven tools and technologies that streamline workflows, making them more efficient by reducing manual effort, improving decision-making, and enhancing overall productivity.",
    },
    {
      question: "How does AI enhance workflow automation?",
      answer:
        "AI enhances workflow automation by analyzing data, predicting outcomes, and making decisions in real-time. It can automate complex processes, learn from historical data to improve accuracy, and adapt to changing conditions, making workflows more dynamic and responsive.",
    },
    {
      question: "Can AI workflow automation be customized?",
      answer:
        "Yes, AI workflow automation tools are highly customizable. Businesses can tailor AI-driven workflows to match their specific processes, rules, and goals. Customization options often include defining triggers, setting conditions, and adjusting the AI’s decision-making criteria to fit unique business needs.",
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    "img_ab1.jpg",
    "img_ab2.jpg",
    "img_ab3.jpg",
    "img_ab4.jpg",
    "img_ab5.jpg",
    "imageab4.jpg",
    "img_ab6.jpg",
    "imageab3.jpg",
  ];

  return (
    <>
      <section className="bg-[url(/traningbg-image.jpg)] h-auto w-full bg-no-repeat bg-cover">
        <div className="px-2 md:px-[120px]">
          <div className=" pt-[150px]">
            <h1 className='text-white text-6xl pl-6 p-6 font-semibold'>Workflow Automation services in Jaipur, India</h1>
            <p className='text-gray-500 p-3 text-[22px]'>
              Our Workflow Automation services in Jaipur, India, streamline your business processes by automating repetitive tasks and enhancing efficiency. We tailor solutions to optimize operations, reduce errors, and improve productivity, ensuring seamless integration with your existing systems. With our expertise, you can focus on strategic growth while we handle the automation of your workflows. Partner with us to drive efficiency and scalability in your business.
            </p>
          </div>



        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-3 px-4 pt-[80px] sm:pt-[150px] lg:pl-[120px] lg:pr-[120px]">
          {[
            {
              icon: <FaPhoenixFramework />,
              title: "AI-powered Workflow",
              desc: "AI-powered workflow automates business processes using artificial intelligence, improving efficiency, reducing manual errors, and enabling smarter decision-making. It streamlines tasks, enhances collaboration, and adapts dynamically to optimize productivity across teams and operations.",
            },
            {
              icon: <SiHyperx />,
              title: "Hyperautomation ",
              desc: "Hyperautomation combines AI, machine learning, and robotic process automation to automate complex business processes end-to-end. It identifies, analyzes, and automates repetitive tasks, optimizing workflows, improving accuracy, and boosting operational efficiency across the organization.",
            },
            {
              icon: <SiKashflow />,
              title: "Low-code Platforms ",
              desc: "Low-code platforms allow users to build applications with minimal hand-coding, using visual interfaces and prebuilt components. They accelerate software development, reduce costs, and empower non-technical users to create business applications efficiently while maintaining scalability and integration capabilities.",
            },
            {
              icon: <GiTwirlyFlower />,
              title: "Increased Personalization",
              desc: "Increased personalization tailors content, recommendations, and experiences to individual users based on behavior, preferences, and data. It improves engagement, customer satisfaction, and conversion rates by delivering relevant, timely, and meaningful interactions across digital platforms.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-xl shadow-lg tranparent hover:bg-indigo-700 hover:text-white transition-all duration-300 
                                      hover:scale-105"
            >
              <h2 className="text-8xl text-white pb-3 icon-spin">{item.icon}</h2>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </section>
      <section className='bg-black pt-5 pb-5 px-5'>
        <div className='text-center justify-start lg:pl-[120px] lg:pr-[120px]'>
          <h2 className='text-white text-start pl-2 pt-16 text-2xl font-bold'>What we do</h2>
          <p className="text-white font-bold p-5 text-start pt-5 text-3xl sm:text-7xl">
            Explore the power of{" "}
            <span className="bg-gradient-to-r from-neutral-700 via-emerald-800 to-[#7C3AED] bg-clip-text text-transparent">
              AI tools,<br /> developed with ingenuity,<br /> brilliance,
            </span>{" "} quality and -
            <span className="inline-block ">
              {text}
            </span>
          </p>
        </div>
      </section>
      {/* S.Goyal */}
      <section className='bg-black pt-5 sm:pt-[150px] lg:pl-[120px] lg:pr-[120px]'>
        <div className='text-center pt-3 '>
          <h2 className='text-white font-bold'>S.Goyal</h2>
          <p className='text-gray-400 '>Creative Director</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-3 px-3 pt-5 pb-2'>
          <div
            className="relative bg-[url(/imagetr1.jpg)] w-full h-[380px] sm:h-[400px] bg-no-repeat bg-cover 
                               hover:opacity-80 hover:scale-90 transition-transform duration-1000 group"
          >
            {/* Text Content */}
            <h2 className="text-white text-4xl p-5 font-serif">0.1</h2>
            <p className="pt-[200px] pl-3 text-white text-3xl font-bold">Innovative Media</p>
            <p className="pl-3 text-white">Consectetur adipiscing elit</p>

            {/* Right Arrow Icon (hidden by default, visible on hover) */}
            <BiRightArrowAlt
              className="absolute bg-gray-800 rounded left-5 bottom-5 text-white text-4xl opacity-0 translate-x-5 
                                 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            />
          </div>
          <div className='relative bg-[url(/imagetr2.jpg)] w-full h-[380px] sm:h-[400px]  bg-no-repeat bg-cover hover:opacity-80 hover:scale-90 transition-transform duration-1000 group'>
            <h2 className='text-white text-4xl p-5 font-serif '>0.2</h2>
            <p className='pt-[200px] pl-3 text-white text-3xl font-bold '>Neural Network </p>
            <p className='pl-3 text-white'>Consectetur adipiscing elit</p>

            {/* Right Arrow Icon (hidden by default, visible on hover) */}
            <BiRightArrowAlt
              className="absolute bg-gray-800 rounded left-5 bottom-5 text-white text-4xl opacity-0 translate-x-5 
                                 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            />
          </div>

          <div className='relative bg-[url(/imagetr3.jpg)] w-full h-[380px] sm:h-[400px] bg-no-repeat bg-cover hover:opacity-80 hover:scale-90 transition-transform duration-1000 group'>
            <h2 className='text-white text-4xl p-5 font-serif '>0.3</h2>
            <p className='pt-[200px] pl-3 text-white text-3xl font-bold '>Algorithms</p>
            <p className='pl-3 text-white'>Consectetur adipiscing elit</p>

            {/* Right Arrow Icon (hidden by default, visible on hover) */}
            <BiRightArrowAlt
              className="absolute bg-gray-800 rounded left-5 bottom-5 text-white text-4xl opacity-0 translate-x-5 
                                 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
            />
          </div>
        </div>



      </section>
      {/* suscribe */}
      <section className='bg-black pt-20   p-20 text-white sm:pt-[150px] lg:pl-[120px] lg:pr-[120px]
                          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 justify-items-center'>
        <div>
          <h2 className='text-5xl font-semibold'>Subscribe for the <br /> exclusive updates!</h2>

        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full py-2 text-[17px] border-none outline-none focus:outline-none"
          />
          <hr />
          <div className='flex'>
            <input className='p-2' type="checkbox" id="" />
            <span className='p-3 text-gray-400'> I agree to the <a className='underline' href="#">Privacy Policy</a></span>
          </div>
        </div>
        <div className='pt-4'>
          <p className='flex text-2xl text-white font-serif hover:text-green-400'><GrSend className=' pr-2 text-3xl' />  Subscribe</p>
        </div>

      </section>
      {/* ai faq */}
      <section ref={ref} className='bg-black py-10 px-5 md:py-30 md:px-10 flex flex-col md:flex-row  lg:pl-[120px] lg:pr-[120px]'>
        {/* Left Column - Image + Counters */}
        <motion.div className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0 lg:pl-[20px]">
          <div className="relative w-full h-[400px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-lg">
            {/* Image slideshow */}
            <motion.img
              src="/ai-sr-image.jpg"
              alt="Image 1"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.img
              src="/ai1-sr-image.jpg"
              alt="Image 2"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            />

            {/* Purple box counter1 */}
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-40 sm:w-60 bg-purple-600 text-white p-4 sm:p-5 rounded-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">People</h2>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold">{counter1}+</h2>
              <p className="text-xs sm:text-sm md:text-base">
                Exciting AI Internship <br /> Opportunities <br /> Await!
              </p>
            </div>

            {/* Black box counter2 */}
            <div className="absolute bottom-4 right-4 sm:w-52 md:w-60 bg-black text-white p-4 sm:p-5 rounded-lg hidden md:block">
              <h2 className="text-xl md:text-3xl font-bold">Satisfied Clients</h2>
              <h2 className="text-4xl md:text-8xl font-bold">{counter2}</h2>
              <p className="text-xs md:text-base">
                Clients satisfied with our <br /> service are our <br />greatest asset.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - FAQ */}
        <div className='w-full md:w-1/2 px-0 sm:pt-[50px] md:pt-[150px] md:pl-10 text-white'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-semibold p-5'>AI Image <br /> Generator FAQs</h2>
          <div className="w-full max-w-2xl mx-auto p-2 md:p-6">
            {faqs.map((item, read) => (
              <div key={`faq-${read}`} className="border-b border-gray-300 py-4 cursor-pointer select-none">
                <div className="flex justify-between items-center" onClick={() => toggleFAQ(read)}>
                  <h2 className="text-lg font-semibold text-white">{item.question}</h2>
                  <motion.div animate={{ rotate: activeIndex === read ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {activeIndex === read ? <Minus className="text-white" /> : <Plus className="text-white" />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === read && (
                    <motion.div
                      key={`answer-${read}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-gray-500 font-bold  text-[17px] rounded">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black lg:px-[120px] py-10 p-4 relative">
        <div className="relative w-full flex justify-center items-center text-center">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={false}
            spaceBetween={-50}
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full max-w-[1200px] mx-auto"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: -30 },
              1024: { slidesPerView: 3, spaceBetween: -50 },
            }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="overflow-hidden rounded-xl">
                <img
                  src={`/${src}`}
                  className="w-full h-full object-cover rounded-xl"
                  alt={`Slide ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </>
  )
}

export default Work_Flow_Automotion