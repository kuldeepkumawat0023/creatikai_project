

"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogleWallet } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrSend } from "react-icons/gr";

import { AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";


function  Basics_Robotics() {
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

    const faqs = [
        {
            question: "Why is training important for AI models?",
            answer:
                "Training is crucial because it enables AI models to learn from data, improving their ability to make accurate predictions, classifications, or decisions in real-world applications.",
        },
        {
            question: "What is AI training?",
            answer:
                "AI training is the process of teaching an artificial intelligence model to perform tasks by feeding it large amounts of data, allowing it to learn patterns, make decisions, and predict outcomes.",
        },
        {
            question: "What is data preprocessing in AI training?",
            answer:
                "Data preprocessing involves cleaning and transforming raw data into a format that is suitable for training, such as handling missing values, normalizing data, and converting categorical data into numerical formats.",
        },
    ];

    return (
        <>
            <section className="bg-[url(/traningbg-image.jpg)] h-auto w-full bg-no-repeat bg-cover lg:pl-[120px] lg:pr-[120px]">


                <div className=" pt-[150px]">
                    <h1 className='text-white text-6xl pl-6 p-6 font-semibold'>AI Traning</h1>
                    <p className='text-gray-500 p-3 text-[22px]'> AI training content refers to the data, resources, and processes used to train artificial intelligence models. Training is a critical step in developing AI systems, where models learn to perform tasks by analyzing large amounts of data and identifying patterns within it. Proper training is essential for AI to function effectively and accurately.
                    </p>
                </div>

                <div className='text-center justify-start pb-10'>
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
            <section className="bg-black pt-5 pb-5 px-5 lg:pl-[120px] lg:pr-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-3 px-4">
                    {[
                        {
                            icon: <FaGoogleWallet />,
                            title: "Traning Techniques",
                            desc: "Automate repetitive tasks and boost productivity using intelligent workflows Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis debitis laborum ipsa similique dolor optio dolores officiis consequuntur enim, alias placeat aliquam. Architecto quae quidem voluptatem similique aut quam",
                        },
                        {
                            icon: <FaEthereum />,
                            title: "Ethical AI Traning",
                            desc: "Turn complex data into insights with real-time dashboards powered by AI Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis debitis laborum ipsa similique dolor optio dolores officiis consequuntur enim, alias placeat aliquam. Architecto quae quidem voluptatem similique aut quam.",
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
                                className="p-5 sm:p-6 rounded-xl shadow-lg bg-black hover:bg-indigo-700 hover:text-white transition-all duration-300  hover:scale-105"
                            >
                                <h2 className="text-8xl text-white pb-3 icon-spin">{item.icon}</h2>
                                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                            </motion.div>
                    ))}
                </div>
            </section>


            {/* S.Goyal */}
            <section className='bg-black pt-5 lg:pl-[120px] lg:pr-[120px]'>
                <div className='text-center pt-3 '>
                    <h2 className='text-white font-bold'>S.Goyal</h2>
                    <p className='text-gray-400 '>Creative Director</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-3 px-5 pt-5 pb-2'>
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
            <section className='bg-black pt-20   p-20 text-white lg:pl-[120px] lg:pr-[120px]
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
                                      src="/ai-image.jpg"
                                      alt="Image 1"
                                      className="absolute inset-0 w-full h-full object-cover"
                                      animate={{ opacity: [1, 1, 0, 0, 1] }}
                                      transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                                  />
                                  <motion.img
                                      src="/ai-1st-image.jpg"
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
                                                      <p className="mt-3 text-gray-500 font-bold bg-gray-800 p-2 rounded">{item.answer}</p>
                                                  </motion.div>
                                              )}
                                          </AnimatePresence>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </section>




        </>
    )
}


export default Basics_Robotics