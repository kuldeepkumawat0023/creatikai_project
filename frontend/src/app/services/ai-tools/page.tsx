"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GrVirtualMachine } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineDataSaverOff } from "react-icons/md";
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

function AI_Toolss() {

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
      question: "What It Takes to Create an Image?",
      answer:
        "Creating an AI image involves training a neural network on vast datasets of images and fine-tuning the model to generate new, realistic images. This process requires significant computational power and expertise in machine learning algorithms.",
    },
    {
      question: "What's the Standard Image Size?",
      answer:
        "Yes, you can create multiple AI images at once by using batch processing techniques, which allow the generation of several images simultaneously. This approach leverages the computational power of GPUs to handle multiple requests efficiently.",
    },
    {
      question: "Can I Create Multiple Images at Once?",
      answer:
        "Yes, you can create multiple images at once using tools like Adobe Photoshop for batch processing, online platforms like Canva for design templates, AI tools like DALL-E for generating variations, or automation scripts for bulk editing. These methods help streamline the creation process and improve efficiency.",
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
            <h1 className='text-white text-6xl pl-6 p-6 font-semibold'>AI Tools</h1>
            <p className='text-gray-500 p-3 text-[22px]'> AI tools are revolutionizing the way businesses operate by automating tasks and enhancing creativity. AI text generators like GPT-4 enable efficient content creation, while the best AI image generators like DALL·E produce high-quality visuals from simple text prompts. For businesses, the best AI tools for business include machine learning platforms, AI-powered analytics, and automation tools that streamline operations and improve decision-making. These tools offer scalability, cost savings, and personalized experiences, making them essential for modern business growth.
            </p>
          </div>



        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-3 px-4 pt-[80px] sm:pt-[150px] lg:pl-[120px] lg:pr-[120px]">
          {[
            {
              icon: <GrVirtualMachine />,
              title: "Machine Learning Tools",
              desc: "Machine learning tools enable data analysis, model building, and predictive analytics. They automate tasks, identify patterns, and support decision-making across industries, making processes efficient and intelligent while reducing human effort and increasing accuracy.",
            },
            {
              icon: <FaEthereum />,
              title: "Ethical AI Traning",
              desc: "Computer vision tools enable machines to interpret and understand visual information from images or videos. They are used for facial recognition, object detection, and image analysis, improving automation, accuracy, and decision-making in industries like healthcare, security, and retail.",
            },
            {
              icon: <BiLogIn />,
              title: "Data Collection",
              desc: "Get tailor-made AI tools built for your unique business challenges Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis debitis laborum ipsa similique dolor optio dolores officiis consequuntur enim, alias placeat aliquam. Architecto quae quidem voluptatem similique aut quam.",
            },
            {
              icon: <MdOutlineDataSaverOff />,
              title: "Data Preprocessing",
              desc: "Get tailor-made AI tools built for your unique business challenges Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis debitis laborum ipsa similique dolor optio dolores officiis consequuntur enim, alias placeat aliquam. Architecto quae quidem voluptatem similique aut quam.",
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
            </span>{" "}
            quality and pride_
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

export default AI_Toolss