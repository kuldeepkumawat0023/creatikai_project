"use client"
import React from 'react'
import { motion } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { CgPen } from "react-icons/cg";
import { GrSend } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";





function Contact() {
    return (
        <>

            <section className="p-3 pt-40 bg-black flex flex-col md:flex-row lg:pl-[120px] lg:pr-[120px] ">
                {/* ---------- LEFT COLUMN ---------- */}
                <div className="w-full md:w-1/2 p-2 pt-10 flex flex-col items-center md:items-start">
                    <h2 className="text-white text-[18px] pl-5 md:pl-[50px]">CONTACT US</h2>
                    <h3 className="text-white text-[40px] sm:text-[50px] md:text-[60px] pl-5 md:pl-[50px] font-semibold leading-tight">
                        Have a <span className="text-indigo-700">Cool Project?</span>
                        <br /> Get in Touch!
                    </h3>

                    {/* IMAGE SECTION */}
                    <div className="pt-10 sm:pt-20 w-full flex justify-center">
                        <motion.div
                            className="relative w-full max-w-[700px] h-[250px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Base Image */}
                            <motion.img
                                src="/contact1.jpg"
                                alt="Main"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 0, opacity: 1 }}
                                whileHover={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            {/* Hover Image */}
                            <motion.img
                                src="/contact2.jpg"
                                alt="Hover"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ y: 50, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>

                </div>

                {/* ---------- RIGHT COLUMN (Form) ---------- */}
                <div className="w-full md:w-1/2 p-4 pt-10 flex justify-center md:justify-start items-start">
                    <div className="w-full sm:w-[90%] md:w-[600px] border bg-gray-950 p-6 md:p-10 rounded">
                        <form>
                            {/* Name */}
                            <div className="w-full pt-6 relative">
                                <div className="flex items-center w-full py-3 relative">
                                    <CiUser className="text-3xl text-gray-500 absolute left-0 top-6" />
                                    <label htmlFor="name" className="w-full pl-10 relative group cursor-text ">
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                                                focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                                            placeholder="Name"
                                        />
                                        <p
                                            className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                                                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                                                peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                                        >
                                            Name
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="w-full pt-6 relative">
                                <div className="flex items-center w-full py-3 relative">
                                    <FaPhoneVolume className="text-2xl text-gray-500 absolute left-0 top-6" />
                                    <label htmlFor="number" className="w-full pl-10 relative group cursor-text">
                                        <input
                                            id="number"
                                            type="number"
                                            required
                                            className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                                                 focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                                            placeholder="Phone"
                                        />
                                        <p
                                            className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                                                 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                                                 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                                                 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                                        >
                                            Phone
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="w-full pt-6 relative">
                                <div className="flex items-center w-full py-3 relative">
                                    <TfiEmail className="text-3xl text-gray-500 absolute left-0 top-6" />
                                    <label htmlFor="email" className="w-full pl-10 relative group cursor-text">
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                                             focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                                            placeholder="Email Address"
                                        />
                                        <p
                                            className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                                             peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                                             peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                                        >
                                            Email Address
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="w-full pt-6 relative">
                                <div className="flex items-center w-full py-3 relative">
                                    <CgPen className="text-3xl text-gray-500 absolute left-0 top-6" />
                                    <label htmlFor="message" className="w-full pl-10 relative group cursor-text">
                                        <input
                                            id="message"
                                            type="text"
                                            required
                                            className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                                             focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                                            placeholder="Your Message"                                   
                                        />
                                        <p
                                            className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                                             peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                                             peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                                        >
                                            Message
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-10">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 w-[160px] bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all duration-300"
                                >
                                    <GrSend className="text-xl" />
                                    <span className="text-[16px]">Get in Touch</span>
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </section>




        </>
    )
}

export default Contact