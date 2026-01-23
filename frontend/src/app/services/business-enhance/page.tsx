"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaPlay } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import for ESM
import "swiper/css";
import "swiper/css/autoplay";

import { FiArrowRight } from 'react-icons/fi'

// ✅ Safe TypingText — avoids hydration mismatch
function TypingText({ text, delay = 50 }: { text: string; delay?: number }) {
    const [mounted, setMounted] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    // Wait until client mounts
    useEffect(() => {
        setMounted(true);   
    }, []);

    // Run typing effect only after mount
    useEffect(() => {
        if (!mounted) return;

        setDisplayedText("");
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, delay);

        return () => clearInterval(interval);
    }, [text, delay, mounted]);

    // On server render (before mount), show full text — prevents mismatch
    if (!mounted) return <span>{text}</span>;

    return <span>{displayedText}</span>;
}

export default function Business_Enhance() {
    const slides = [
        {
            image: "/slider-5-slide-1.jpg",
            heading1: "Finical ",
            heading2: "Planing",
            heading3: "for your Company",
        },
        {
            image: "/slider-5-slide-2.jpg",
            heading1: "Business ",
            heading2: "Strategy",
            heading3: "for Growth",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sectionInView, setSectionInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    const slide = slides[currentSlide];

    // Handle click to change slide
    const handleClick = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Detect if section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setSectionInView(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Scroll inside section triggers slide change
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionInView) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current + 20) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                lastScrollY.current = currentScrollY;
            } else if (currentScrollY < lastScrollY.current - 20) {
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionInView, slides.length]);



    const [isOpen, setIsOpen] = useState(false);



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

    // 🔹 Counters data
    const counters = [
        { label: "Projects", value: 18 },
        { label: "People", value: 65 },
        { label: "Year", value: 1 },
        { label: "Office", value: 5 },
    ];

    const [counts, setCounts] = useState(counters.map(() => 0));
    const countersRef = useRef<HTMLDivElement>(null); // unique ref for counters
    const [countersInView, setCountersInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setCountersInView(entry.isIntersecting),
            { threshold: 0.5 } // 50% visible
        );

        if (countersRef.current) observer.observe(countersRef.current);
        return () => {
            if (countersRef.current) observer.unobserve(countersRef.current);
        };
    }, []);

    // Only start counters when in view
    useEffect(() => {
        if (!countersInView) return;

        const counterIntervals: number[] = [];

        counters.forEach((counter, index) => {
            const increment = Math.ceil(counter.value / 50);
            counterIntervals[index] = window.setInterval(() => {
                setCounts((prev) => {
                    const newCounts = [...prev];
                    if (newCounts[index] < counter.value) {
                        newCounts[index] = Math.min(newCounts[index] + increment, counter.value);
                    }
                    return newCounts;
                });
            }, 30);
        });

        return () => counterIntervals.forEach((i) => clearInterval(i));
    }, [countersInView]);


    const bubbles = Array.from({ length: 15 });

    return (
        <>
            <section
                ref={sectionRef}
                className="relative h-screen w-full overflow-hidden bg-black cursor-pointer md:px-[120px] px-3"
                onClick={handleClick}
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        {sectionInView && (
                            <motion.div
                                key={slide.image}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Foreground */}
                <div className="relative z-10 pt-5 sm:pt-[70px] md:pl-[50px] flex flex-col justify-center h-full">
                    <p className="text-white text-[15px] p-2 sm:text-[18px] uppercase">
                        corporate services
                    </p>

                    {sectionInView && (
                        <>
                            <motion.h2
                                key={slide.heading1 + slide.heading2 + currentSlide}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="text-3xl md:text-[70px] text-start text-white flex font-bold"
                            >
                                <TypingText text={slide.heading1} delay={100} />
                                <img
                                    src="/slider-5-small.jpg"
                                    className="w-[50px] h-[50px] md:w-[100px] md:h-[70px] md:mx-2"
                                    alt="small img"
                                />
                                <TypingText text={slide.heading2} delay={100} />
                            </motion.h2>

                            <br />

                            <motion.h2
                                key={slide.heading3 + currentSlide}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-3xl md:text-[70px] text-start text-white flex uppercase font-bold"
                            >
                                <TypingText text={slide.heading3} delay={50} />
                            </motion.h2>
                        </>
                    )}
                </div>
            </section>

            <section className="bg-[url(/blur-bg.png)] w-full h-auto bg-cover bg-no-repeat bg-sky-100 px-4 md:px-[120px]">
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
                    <img src="/partner-3_1.png" alt="partner1" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                    <img src="/partner-3_2.png" alt="partner2" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                    <img src="/partner-3_3.png" alt="partner3" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                    <img src="/partner-3_4.png" alt="partner4" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                    <img src="/partner-3_5.png" alt="partner5" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                    <img src="/partner-3_6.png" alt="partner6" className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[170px] md:h-[150px] p-2 rounded transition transform duration-300 ease-in-out hover:scale-115" />
                </div>
            </section>
            <section className="bg-[url(/blur-bg.png)] w-full h-auto bg-cover bg-no-repeat bg-sky-100 px-4 md:px-[120px]">
                <div className="py-28 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {/* Left Text Section */}
                    <div className="pt-5 md:pt-[100px]">
                        <div>
                            <h2 className="text-black text-[17px] uppercase font-serif">Corporate Service</h2>
                            <p className="text-black text-4xl md:text-[60px] font-semibold">
                                Find an AI solution for your business.
                            </p>
                            <p className="text-gray-700 font-bold">
                                To find the right AI solution, identify your business needs and then explore providers that offer tailored tools for those needs. Test a solution on a small scale before full implementation to ensure it meets your goals.
                            </p>
                            <button
                                type="button"
                                className="my-5 ml-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded"
                            >
                                Our Services
                            </button>
                        </div>
                    </div>

                    {/* Right Cards Section */}
                    <div className="p-1">
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            {/* Card 1 */}
                            <div className="group bg-white hover:bg-indigo-700 lg:mt-7 p-10 m-3 transition-all duration-300 ease-in-out rounded">
                                <h2 className="text-3xl font-bold group-hover:text-white">Identify Your Needs</h2>
                                <p className="py-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                                    Determine the challenges or inefficiencies in your business that AI could address.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group bg-white hover:bg-indigo-700 lg:mb-7 p-10 m-3 transition-all duration-300 ease-in-out rounded">
                                <h2 className="text-3xl font-bold group-hover:text-white">Consider Integration</h2>
                                <p className="py-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                                    Determine the challenges or inefficiencies in your business that AI could address.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group bg-white hover:bg-indigo-700 p-10 lg:mt-7 m-3 transition-all duration-300 ease-in-out rounded">
                                <h2 className="text-3xl font-bold group-hover:text-white">Evolates Provides</h2>
                                <p className="py-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                                    Determine the challenges or inefficiencies in your business that AI could address.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="group bg-white hover:bg-indigo-700 p-10 lg:mb-7 m-3 transition-all duration-300 ease-in-out rounded">
                                <h2 className="text-3xl font-bold group-hover:text-white">Test And Scale</h2>
                                <p className="py-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                                    Determine the challenges or inefficiencies in your business that AI could address.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[url('/blur-bg.png')] bg-cover bg-no-repeat bg-sky-100 px-4  lg:px-[120px] py-10 overflow-hidden">

                {/* 🔹 Black Background Div (Behind) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[800px] h-[300px] md:h-[800px] bg-transparent sm:bg-black rounded-2xl z-0 opacity-80"></div>

                {/* 🔸 Main Grid Section */}
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Hover Image */}
                        <div className="flex justify-center items-center w-full">
                            <motion.div
                                className="relative w-full max-w-[450px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group shadow-lg"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {/* Base Image */}
                                <motion.img
                                    src="/bs4img.jpg"
                                    alt="Main"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ y: 0, opacity: 1 }}
                                    whileHover={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />

                                {/* Hover Image */}
                                <motion.img
                                    src="/bs9img.jpg"
                                    alt="Hover"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </div>

                        {/* Static Image with Play Button */}
                        <div className="flex justify-center items-center">
                            <div className="relative group w-full max-w-[300px] h-[400px] sm:h-[350px] md:h-[400px]">
                                <img
                                    src="/bs10img.jpg"
                                    alt="bs10"
                                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                                />

                                {/* Play Icon Overlay */}
                                <button

                                    onClick={() => setIsOpen(true)}
                                    className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                >
                                    <FaPlay className="text-white text-4xl sm:text-5xl bg-indigo-500 p-4 rounded-full shadow-lg hover:bg-indigo-600 transition" />.
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <motion.div
                        className="relative z-10 flex flex-col justify-center items-start text-white px-2 sm:px-6 md:px-10 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 100 }}                // 👈 Start from the right (off-screen)
                        whileInView={{ opacity: 1, x: 0 }}             // 👈 Animate to visible position
                        transition={{ duration: 0.8, ease: "easeOut" }} // 👈 Smooth transition
                        viewport={{ once: true }}                      // 👈 Run animation only once when in view
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold font-sans mt-4
                       bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
                       bg-clip-text text-transparent leading-snug sm:leading-tight md:leading-tight">
                            About Us
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 max-w-[500px] leading-relaxed">
                            We deliver creative design and modern web solutions worldwide. Our team is passionate about crafting experiences that engage and inspire.
                        </p>
                        <button
                            type="button"
                            className="bg-indigo-500 rounded-lg text-white text-base sm:text-lg lg:text-xl hover:bg-indigo-600 px-5 py-2 sm:px-6 sm:py-3 transition"
                        >
                            Learn More
                        </button>
                    </motion.div>

                </div>

                {/* Video Popup */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
                        <div className="relative w-full max-w-[800px] aspect-video bg-black rounded-lg overflow-hidden">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 text-white text-2xl font-bold z-10 hover:text-red-400"
                            >
                                ✕
                            </button>

                            <video
                                src="/module-vedio.mp4"   // Must be in public folder
                                autoPlay
                                muted                      // Needed for autoplay
                                controls
                                loop
                                className="w-full h-full object-cover"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}





            </section>
            <section className="bg-sky-100 py-5 md:px-[120px]">
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
                <div className=" pt-[70px]">
                    <div className="text-center">
                        <h2 className="text-black font-semibold text-[18px] ">Sharan Goyal</h2>
                        <p className="text-gray-400 text-[18px]">Creative Director</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center py-8">

                        {/* 🔹 Card 1 */}
                        <div className="relative w-full max-w-[250px] h-[300px] rounded-xl overflow-hidden group">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-[url('/bs1img.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col justify-end items-center text-center h-full p-6">
                                <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2 leading-tight">
                                    Explore AI <br /> Technologies
                                </h2>
                                <p className="text-gray-200 text-base sm:text-lg">Creative</p>
                            </div>
                        </div>

                        {/* 🔹 Card 2 */}
                        <div className="relative w-full max-w-[250px] h-[300px] rounded-xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/bs2img.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col justify-end items-center text-center h-full p-6">
                                <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2 leading-tight">
                                    Visionary AI <br /> Solution
                                </h2>
                                <p className="text-gray-200 text-base sm:text-lg">Creative</p>
                            </div>
                        </div>

                        {/* 🔹 Card 3 */}
                        <div className="relative w-full max-w-[250px] h-[300px] rounded-xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/bs3img.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col justify-end items-center text-center h-full p-6">
                                <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2 leading-tight">
                                    AI Tools and <br /> Services
                                </h2>
                                <p className="text-gray-200 text-base sm:text-lg">Creative</p>
                            </div>
                        </div>

                        {/* 🔹 Card 4 */}
                        <div className="relative w-full max-w-[250px] h-[300px] rounded-xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/bs4img.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col justify-end items-center text-center h-full p-6">
                                <h2 className="text-white font-bold text-2xl sm:text-3xl mb-2 leading-tight">
                                    Popular AI Tools <br /> For Business
                                </h2>
                                <p className="text-gray-200 text-base sm:text-lg">Creative</p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center justify-center">
                        <button type="button" className="rounded p-3 text-2xl text-white bg-green-600 hover:bg-green-700">Our Services</button>
                    </div>


                </div>
            </section>
            <section className="bg-black px-4 md:px-[120px] py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 🔹 First Div - Swiper */}
                    <div className=" md:pt-[180px]">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center h-full text-center px-2">
                                    <p className="text-white text-xl sm:text-2xl md:text-2xl max-w-md">
                                        An AI Expert designs and implements advanced artificial intelligence solutions, leveraging machine learning, data analysis, and algorithm development. They stay at the forefront of AI technologies to solve complex problems and drive innovation.
                                    </p>
                                    <img
                                        src="/bs1img.jpg"
                                        alt="Mary Farrell"
                                        className="rounded-full mt-6 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
                                    />
                                    <p className="text-white">
                                        Mary Farrell <br />
                                        <span className="text-gray-500">AI Expert</span></p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center h-full text-center px-2">
                                    <p className="text-white text-xl sm:text-2xl md:text-2xl max-w-md">
                                        An AI Tools Expert evaluates and integrates artificial intelligence tools to enhance business processes. They stay updated on the latest AI technologies, implement solutions, and optimize tool performance to achieve strategic goals.
                                    </p>
                                    <img
                                        src="/bs6img.jpg"
                                        alt="Adrian Smith"
                                        className="rounded-full mt-6 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
                                    />
                                    <p className="text-white">

                                        Adrian Smith <br />
                                        <span className="text-gray-500">AI Tools Expert</span></p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center h-full text-center px-2">
                                    <p className="text-white text-xl sm:text-2xl md:text-2xl max-w-md">
                                        An SEO Expert specializes in optimizing websites to improve search engine rankings and drive organic traffic. They analyze search algorithms, conduct keyword research, and implement strategies to enhance online visibility and performance.
                                    </p>
                                    <img
                                        src="/bs7img.jpg"
                                        alt=" Jane Farmer"
                                        className="rounded-full mt-6 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
                                    />
                                    <p className="text-white">
                                        Jane Farmer <br />
                                        <span className="text-gray-500">SEO Expert</span></p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center h-full text-center px-2">
                                    <p className="text-white text-xl sm:text-2xl md:text-2xl max-w-md">
                                        An AI Tools Expert evaluates and integrates artificial intelligence tools to enhance business processes. They stay updated on the latest AI technologies, implement solutions, and optimize tool performance to achieve strategic goals.
                                    </p>
                                    <img
                                        src="/bs8img.jpg"
                                        alt="Adrian Smith"
                                        className="rounded-full mt-6 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover"
                                    />
                                    <p className="text-white">
                                        Adrian Smith <br />
                                        <span className="text-gray-500">AI Tools Expert</span></p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* 🔹 Second Div - Changing Image with Motion */}
                    <motion.div className="flex justify-center">
                        <div className="relative w-full h-64 sm:h-80 md:h-[700px] rounded-lg overflow-hidden">
                            {/* Image slideshow with slow fade */}
                            <motion.img
                                src="/bs12img.jpg"
                                alt="Image 1"
                                className="absolute inset-0 w-full h-full object-cover"
                                animate={{ opacity: [1, 1, 0, 0, 1] }}
                                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                            />
                            <motion.img
                                src="/bs11img.jpg"
                                alt="Image 2"
                                className="absolute inset-0 w-full h-full object-cover"
                                animate={{ opacity: [0, 0, 1, 1, 0] }}
                                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>


            <section ref={countersRef} className="bg-sky-100 md:px-[120px] md:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-6 py-10">
                    {counters.map((counter, index) => (
                        <div key={index} className="rounded-lg p-6 shadow-md bg-sky-200">
                            <h2 className="text-[120px] font-bold font-sans mt-4
          bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400
          bg-clip-text text-transparent leading-snug sm:leading-tight md:leading-tight">
                                {counts[index]}
                            </h2>
                            <p className="text-purple-400 -mt-[30px] font-semibold text-[40px] text-center absolute">
                                {counter.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-sky-100 px-5 sm:px-10 md:px-[120px] py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

                    {/* Left: Image with bubbles */}
                    <div className="relative w-full max-w-full md:max-w-[450px] h-[400px] sm:h-[450px] md:h-[500px] mx-auto rounded-2xl overflow-hidden shadow-lg">

                        {/* Image container with hover zoom */}
                        <motion.div
                            className="w-full h-full relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            {/* Base Image */}
                            <motion.img
                                src="/bs12img.jpg"
                                alt="Main"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 0, opacity: 1 }}
                                whileHover={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            {/* Hover Image */}
                            <motion.img
                                src="/bs13img.jpg"
                                alt="Hover"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            {/* Bubbles */}
                            {bubbles.map((_, i) => {
                                const width = Math.random() * 50 + 20;
                                const height = Math.random() * 50 + 20;
                                const left = Math.random() * 90 + 5;
                                const duration = Math.random() * 30 + 10;
                                const delay = Math.random() * 10;

                                return (
                                    <motion.span
                                        key={i}
                                        className="absolute bottom-0 bg-indigo-300 opacity-70"
                                        style={{
                                            width: width,
                                            height: height,
                                            left: `${left}%`,
                                            borderRadius: 0,
                                        }}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: ["100%", "-100%"], opacity: [0.5, 1, 0] }}
                                        transition={{
                                            duration: duration,
                                            repeat: Infinity,
                                            delay: delay,
                                            ease: "easeInOut",
                                        }}
                                    ></motion.span>
                                );
                            })}
                        </motion.div>

                        {/* Fixed Bottom-Right Box */}
                        <div className="absolute bottom-4 right-4 bg-black text-white text-[18px] sm:text-[24px] md:text-[30px] font-bold px-3 py-2 md:size-50 p-3 rounded pointer-events-none">
                            We develop & create digital future.
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="px-2 md:pl-7 flex flex-col justify-center">
                        <h2 className="text-black text-[16px] sm:text-[18px] uppercase font-serif">what we do</h2>
                        <h3 className="text-black text-4xl sm:text-5xl md:text-5xl font-bold font-mono pt-2 sm:pt-4">
                            Create your own AI business easily.
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] pt-4 sm:pt-6 text-gray-400">
                            To create your own AI business, start by identifying a niche where AI can add value, then build or source AI tools to address that need. Focus on developing a clear business model, gaining initial clients, and scaling based on feedback and success.
                        </p>
                        <ul className="list-none pt-6 sm:pt-8 md:pt-10 text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold text-gray-800 space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-gray-500">01.</span>
                                <span>Find pre-Trained Models</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-500">02.</span>
                                <span>Build Your Own Models</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="bg-indigo-500 rounded-lg text-white text-base sm:text-lg lg:text-xl hover:bg-indigo-600 px-5 py-2 sm:px-6 sm:py-3 w-[180px] h-[50px] transition mt-3"
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </section>



            <section className="bg-gray-950 px-4 md:px-[120px]">
                {/* Heading */}
                <div className="text-center pt-16">
                    <h2 className="text-sm sm:text-base font-serif uppercase text-white">from our blog</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-[60px] font-semibold text-white">News & Articles</h3>
                </div>

                {/* Blog Card */}
                <div className="flex justify-center md:justify-start mt-12">
                    <div className="bg-white py-8 p-4 w-full max-w-sm sm:max-w-md md:w-[300px] rounded-lg shadow-lg">
                        <div className="text-black pt-4 sm:pt-8">
                            <h2 className="uppercase text-xs sm:text-sm font-medium">
                                AI FOR BUSINESS <span className="text-gray-500 text-[10px] sm:text-xs">. February 6, 2021</span>
                            </h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold pt-2 sm:pt-3">
                                How companies are making money
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm pt-2 flex items-center gap-2">
                                Companies are leveraging AI in various ways to generate revenue…

                            </p>
                            <FiArrowRight className="text-gray-600 mt-4 text-4xl rounded" />
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center py-6">
                    <button className="w-36 h-12 sm:w-40 sm:h-14 text-white bg-green-600 rounded hover:bg-green-700 transition">
                        Read More
                    </button>
                </div>
            </section>


















        </>
    );
}
