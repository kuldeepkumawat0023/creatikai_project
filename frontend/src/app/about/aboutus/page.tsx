"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css"; import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; import "swiper/css/navigation";
import { PiArrowLeftBold, PiArrowRightBold, PiTelegramLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";

function About() {
  const swiperRef = useRef<SwiperType | null>(null);

  const images = [
    "img_ab1.jpg",
    "img_ab2.jpg",
    "img_ab3.jpg",
    "img_ab4.jpg",
    "img_ab5.jpg",
    "img_ab6.jpg",
  ];




  const skills = [
    { name: "Training", value: 95 },
    { name: "Technology", value: 90 },
    { name: "Animation", value: 85 },
  ];
  return (
    <>
      <section className="bg-black text-white py-10 sm:pt-[100px] px-4 md:px-8 lg:px-[120px]">
        {/* ✅ Equal-height grid with top alignment */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-start items-center w-full">
            <motion.div
              className="relative w-full max-w-[600px] h-[220px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] 
                       rounded-2xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Base Image */}
              <motion.img
                src="/imageab1.jpg"
                alt="Main"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ y: 0, opacity: 1 }}
                whileHover={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* Hover Image */}
              <motion.img
                src="/imageab2.jpg"
                alt="Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ y: 50, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-start items-start w-full">
            <h2 className="text-[14px] sm:text-[16px] tracking-widest text-gray-300 uppercase pl-2 sm:pl-0">
              Welcome
            </h2>

            {/* Animated Gradient Text */}
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold font-sans mt-4
                       bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                       bg-clip-text text-transparent leading-snug sm:leading-tight md:leading-tight"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              At Creatikai.com, we specialize in AI solutions to transform your business operations.
            </motion.p>

            <p className="text-gray-400 text-sm sm:text-base md:text-[17px] mt-5 leading-relaxed pr-2 sm:pr-0">
              Our services include tailored AI implementations, comprehensive training programs,
              and expert support. We are committed to leveraging the latest AI technologies to
              drive efficiency and innovation. With a focus on personalized solutions, we help
              you achieve your specific goals and stay ahead in a rapidly evolving landscape.
              Partner with us to unlock the full potential of AI for your business.
            </p>

            {/* Bottom Image */}
            <div className="mt-10 flex justify-center md:justify-start w-full">
              <motion.div
                className="relative w-full max-w-[600px] h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px]
                         rounded-2xl overflow-hidden group shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Base Image */}
                <motion.img
                  src="/imageab3.jpg"
                  alt="About image 3"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Hover Image */}
                <motion.img
                  src="/imageab4.jpg"
                  alt="Hover"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ y: 50, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black lg:px-[120px] py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* ✅ Centered Icon */}
          <PiTelegramLogoBold className="text-gray-400 text-5xl" />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">
            Get the best blog stories <br /> into your inbox!
          </h2>
          <div className="flex w-full sm:w-110 bg-gray-900 rounded-lg overflow-hidden shadow-md px-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none text-base"
            />
            <button className="bg-gray-900 hover:bg-gray-900 group text-white font-semibold px-4 py-3 flex items-center gap-2 transition-colors duration-300">
              <PiTelegramLogoBold className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-300" />
              <span className="group-hover:text-green-600 transition-colors duration-300">Subscribe</span>
            </button>
          </div>

        </div>
      </section>

      <section className="bg-black lg:px-[120px] py-10 p-4 relative">
        <div className="relative w-full flex justify-center items-center text-center">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800/50 hover:bg-green-600 p-3 rounded-full transition-all"
          >
            <PiArrowLeftBold className="text-white text-3xl" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800/50 hover:bg-green-600 p-3 rounded-full transition-all"
          >
            <PiArrowRightBold className="text-white text-3xl" />
          </button>

          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={-50}
            loop={false} // disables infinite looping
            speed={600} // smooth animation
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full max-w-[1200px] mx-auto"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: -20 },
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

      <section className="bg-black lg:px-[120px] py-10 p-4">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div className="flex flex-col gap-6 w-full max-w-md pt-6 sm:pt-[100px]">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-1">
                  {skill.name} - {skill.value}%
                </h3>
                <div className="w-full h-[10px] bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-[10px] bg-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-start items-start w-full">
            <h2 className="text-[14px] sm:text-[16px] tracking-widest text-gray-300 uppercase pl-2 sm:pl-0">
              our practice
            </h2>

            {/* Animated Gradient Text */}
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold font-sans mt-4
                       bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                       bg-clip-text text-transparent leading-snug sm:leading-tight md:leading-tight"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              AI Skills
            </motion.p>

            <p className="text-gray-400 text-sm sm:text-base md:text-[18px] mt-5 leading-relaxed pr-2 sm:pr-0">
              At Creatikai.com, we excel in key AI skills including advanced machine learning algorithms, data analysis, and predictive modeling. Our expertise spans deep learning, natural language processing, and automation, ensuring tailored solutions that meet your unique business needs. We continuously refine our skills to stay ahead in the dynamic AI landscape, providing cutting-edge solutions and insights.
            </p>


          </div>

        </div>

      </section>




    </>
  )
}

export default About