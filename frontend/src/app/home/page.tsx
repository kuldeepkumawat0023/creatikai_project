"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";


export default function HomePage() {
   

    return (
        <main className="text-gray-900 overflow-x-hidden">
          


            <section className="relative w-full h-[600px] sm:h-[700px] overflow-hidden lg:pl-[120px] lg:pr-[120px]">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/background_video.mp4"
                ></video>

                <div className="h-full flex flex-col justify-center items-center p-4 sm:p-6 text-center">
                    {["AI Business", "Automation", "Training is the", "Future"].map(
                        (text, index) => (
                            <motion.h1
                                key={index}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent drop-shadow-md leading-tight"
                                style={{
                                    backgroundImage:
                                        text === "Future"
                                            ? "linear-gradient(90deg, #3b82f6, #60a5fa)"
                                            : "linear-gradient(90deg, #4ade80, #22d3ee, #a5b4fc)",
                                    backgroundSize: "200% 200%",
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                            >
                                {text}
                            </motion.h1>
                        )
                    )}
                </div>
            </section>

            <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-t from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="w-full h-full  flex flex-col justify-center items-center text-center p-4 sm:p-6">
                    <motion.p
                        className="text-yellow-200 mb-2 text-base sm:text-lg font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        whileHover={{ scale: 1.1, color: "#fff" }}
                    >
                        What We Do
                    </motion.p>

                    {[
                        "Explore the power of AI development",
                        "tools, crafted with brilliance, style,",
                        "quality and creativity.",
                    ].map((line, index) => (
                        <motion.h1
                            key={index}
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white my-1 cursor-grab"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.4 + index * 0.2,
                                // ease: "easeOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                // textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
                                color: "grey",
                            }}
                        >
                            {line}
                        </motion.h1>
                    ))}

                    <motion.p
                        className="text-orange-100 mt-6 text-base sm:text-lg font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        S. Goyal
                    </motion.p>

                    <motion.p
                        className="text-gray-200 text-sm sm:text-md"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Creative Director
                    </motion.p>
                </div>
            </section>

            <section className="relative w-full py-12 sm:py-16 bg-gradient-to-t from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 justify-items-center">
                    {[
                        {
                            title: "Data Collection",
                            desc: "AI data collection involves gathering diverse, high-quality data to train models effectively, ensuring accuracy and relevance.",
                        },
                        {
                            title: "Lead Generation",
                            desc: "AI tools enhance lead generation by analyzing data, identifying potential customers, and automating outreach, boosting efficiency and accuracy.",
                        },
                        {
                            title: "Automation",
                            desc: "AI automation streamlines repetitive tasks, improves efficiency, and reduces error by handling routine processes and decision-making.",
                        },
                        {
                            title: "Unique Technologies",
                            desc: "Unique AI technologies include generative models, reinforcement learning, and neural architecture search, offering advanced solutions and insights.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 12,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="group relative w-full max-w-[320px] p-6 bg-gradient-to-br from-gray-400 to-purple-50
                         rounded-tl-[40px] rounded-br-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                         border-l-4 border-t-2 border-indigo-300 overflow-hidden transition-transform duration-500
                         hover:translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                        >
                            <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tr from-pink-200 to-yellow-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-bl from-cyan-200 to-blue-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>

                            <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-3 text-center">
                                {item.title}
                            </h3>
                            <p className="text-black text-sm sm:text-base leading-relaxed text-center">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section
                className="w-full py-16 sm:py-12 bg-cover bg-center bg-no-repeat relative lg:pl-[120px] lg:pr-[120px] "
                style={{ backgroundImage: "url('/bg-pattern.jpg')" }}
            >
                <div className=" absolute inset-0 bg-gradient-to-b from-black via-gray-700 to-[#7C3AED]"></div>

                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-10 px-6 sm:px-10">
                    <motion.div
                        className="w-full sm:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-[700px] h-[450px]  rounded-lg overflow-hidden group">
                            <motion.img
                                src="/image-1.jpg"
                                alt="Main"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 0, opacity: 1 }}
                                whileHover={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            <motion.img
                                src="/image-2.jpg"
                                alt="Hover"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                        </div>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full sm:w-1/2 text-center sm:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-base sm:text-lg font-semibold text-gray-200 mb-2"
                        >
                            WELCOME.
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-base lg:text-4xl font-bold mb-4 text-white"
                        >
                            Easy ways to use AI tools, and tools to build AI.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            className="text-sm lg:text-lg md:text-md leading-relaxed text-gray-300 space-y-4"
                        >
                            <span className="block text-gray-100 font-semibold text-base lg:text-xl">
                                Using AI Tools:
                            </span>
                            Start with user-friendly AI tools and platforms that offer pre-built models
                            and templates for easy setup.

                            <br />
                            <br />

                            <span className="block text-gray-100 font-semibold text-base lg:text-xl">
                                Building AI:
                            </span>
                            Use open-source libraries and frameworks to develop custom AI models tailored
                            to specific needs.

                            <br />
                            <br />

                            <span className="block text-gray-100 font-semibold text-base lg:text-xl">
                                Resources:
                            </span>
                            Access online tutorials and community forums to learn and get support as you
                            work with AI tools and technologies.
                        </motion.p>

                    </motion.div>
                </div>
            </section>

            <section className="w-full py-12 sm:py-16 bg-gradient-to-t from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className=" flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
                    <motion.div
                        className="w-full sm:w-1/2 pl-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            className="text-base sm:text-lg font-semibold text-white mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            WELCOME.
                        </motion.p>

                        <motion.h2
                            className="text-base lg:text-4xl font-bold mb-4 text-white"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Easy ways to use AI tools, and tools to build AI.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            className=" text-sm lg:text-lg md:text-md leading-relaxed text-gray-300 space-y-4"
                        >
                            <span className="block text-gray-100 font-semibold text-base lg:text-xl">
                                Using AI Tools:
                            </span>
                            Start with user-friendly AI tools and platforms that offer pre-built models
                            and templates for easy setup.

                            <br />
                            <br />

                            <span className="block text-gray-100 font-semibold text-base lg:text-xl">
                                Building AI:
                            </span>
                            Use open-source libraries and frameworks to develop custom AI models tailored
                            to specific needs.

                            <br />
                            <br />

                            <span className=" block text-gray-100 font-semibold text-base lg:text-xl">
                                Resources:
                            </span>
                            Access online tutorials and community forums to learn and get support as you
                            work with AI tools and technologies.
                        </motion.p>

                    </motion.div>

                    <motion.div
                        className="w-full sm:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-[700px] h-[450px]  rounded-lg overflow-hidden group">
                            <motion.img
                                src="/image-1.jpg"
                                alt="Main"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 0, opacity: 1 }}
                                whileHover={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            <motion.img
                                src="/image-2.jpg"
                                alt="Hover"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="px-6 max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                                Our portfolio.
                            </p>
                            <p className="text-gray-100 font-bold text-2xl sm:text-3xl mt-1">
                                AI Images.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-2">
                                An AI images portfolio showcases diverse, high-quality visuals generated
                                by AI, highlighting creativity and technical expertise in image synthesis.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex sm:justify-end justify-center items-center"
                        >
                            <button
                                className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-colors"
                            >
                                View More →
                            </button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 justify-items-center">
                        {[11, 10, 9].map((num, index) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative cursor-pointer w-[350px] h-[400px]"
                            >
                                <motion.img
                                    src={`/image-${num}.${num === 10 ? "png" : num === 9 ? "jpeg" : "jpg"}`}
                                    alt={`Image ${num}`}
                                    className="w-full h-full rounded-xl shadow-xl object-cover"
                                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                                />

                                <motion.div
                                    className="absolute top-4 left-4 flex flex-col gap-2"
                                    initial={{ opacity: 0, y: -10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {["Card 1", "Card 2", "Card 3"].map((text, i) => (
                                        <div
                                            key={i}
                                            className="bg-white bg-opacity-80 backdrop-blur-md text-black text-sm font-medium px-3 py-1 rounded shadow"
                                        >
                                            {text}
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>




                </div>
            </section>


            <section className="w-full py-12 bg-gradient-to-t from-black via-gray-700 to-[#7C3AED] flex justify-center lg:pl-[120px] lg:pr-[120px]">
                <motion.div
                    className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Stay Updated!
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Subscribe to get the latest updates and offers.
                    </motion.p>

                    <form className="w-full flex flex-col gap-4">
                        <motion.div className="relative w-full">
                            <motion.input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-md focus:outline-none placeholder-gray-500"
                                required
                                whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(124, 58, 237, 0.5)" }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center text-purple-600 hover:text-purple-800"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </motion.div>

                        <motion.label
                            className="flex items-center gap-2 text-gray-600 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <input type="checkbox" required className="w-4 h-4" />
                            I agree to the <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
                        </motion.label>
                    </form>

                </motion.div>
            </section>



            <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-6">

                    <motion.div
                        className="w-full sm:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="/image-6.jpg"
                            alt="Description"
                            className="w-[630px] 
              h-[350px] rounded-lg shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                            whileHover={{ y: 0, scale: 1.05 }}
                        />
                    </motion.div>

                    <div className="w-full sm:w-1/2 space-y-8">

                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">What is AI Training?</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                                AI training involves teaching models to recognize patterns and make decisions by processing large amounts of data.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">How long does AI training take?</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                                The duration depends on model complexity and dataset size — from a few hours for small models to weeks for large-scale ones.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Why is data quality important?</h2>
                            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                                High-quality data ensures your AI model learns accurately and performs reliably in real-world scenarios.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </section>
            <section className="w-full py-12 sm:py-16 bg-gradient-to-t from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="px-6 max-w-7xl mx-auto flex flex-col items-center">

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-1 gap-8 mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <p className="text-gray-200">from our blog</p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">News & Articles</h3>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                        {[11, 10, 9].map((num, index) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                }}
                                whileHover={{ scale: 1.05, y: 0 }}
                                className="cursor-pointer"
                            >
                                <img
                                    src={`/image-${num}.${num === 10 ? "png" : num === 9 ? "jpeg" : "jpg"}`}
                                    alt={`Image ${num}`}
                                    className="w-[350px] h-[400px] rounded-lg shadow-lg"
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-700 to-[#7C3AED] lg:pl-[120px] lg:pr-[120px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <motion.h2
                        className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {"Why Choose CREATIK AI?".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                style={{ color: char === " " ? undefined : "#22d3ee" }}
                                animate={{
                                    y: [0, -10, 0],
                                    color: ["#22d3ee", "#facc15", "#22d3ee"],
                                }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {[
                            {
                                title: "AI Automation",
                                desc: "Automate repetitive tasks and boost productivity using intelligent workflows.",
                            },
                            {
                                title: "Smart Analytics",
                                desc: "Turn complex data into insights with real-time dashboards powered by AI.",
                            },
                            {
                                title: "Custom Solutions",
                                desc: "Get tailor-made AI tools built for your unique business challenges.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="p-5 sm:p-6 rounded-xl shadow-lg bg-white transition-all duration-300 
                           hover:shadow-cyan-400/50 hover:shadow-2xl hover:border-cyan-400 hover:scale-105"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-600">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}



