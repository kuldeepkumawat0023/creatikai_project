"use client";
import React from 'react'
import { ArrowRight } from "lucide-react";
import Link from "next/link";


function Footer() {
    return (
        <>
            <section className="py-20 sm:py-24 text-white bg-black  shadow-lg overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-16">

                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide"> <Link href="/">Creatik AI Solutions</Link></h2>

                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-lg"> Newsletter Signup</p>
                            <div className="flex w-full sm:w-96 bg-gray-900 rounded-lg overflow-hidden shadow-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none text-base"
                                />
                                <button className="bg-gray-800 hover:bg-gray-800 text-gray-900 font-semibold px-4 flex items-center justify-center transition-all">
                                    <ArrowRight className="w-6 h-6 text-white hover:text-green-600" />
                                </button>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" required className="w-4 h-4 mt-[2px]" />
                                <span className='pl-[10px]'>I agree to the <a href="#" className="text-gray-400 underline">Privacy Policy</a></span>
                            </div>


                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <p className="text-white text-4xl font-semibold">
                            AI tips from the finest Creatik Developers
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

                            <div>
                                <h3 className="font-semibold mb-3 text-lg">Socials</h3>
                                <ul className="flex flex-col gap-2 text-base">
                                    <li className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300"><Link href="/">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Instagram
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></Link>
                                    </li>

                                    <li className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300"><Link href="/">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Facebook
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></Link>
                                    </li>
                                    <li className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <Link href="/">
                                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                                Twitter
                                            </span>
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></Link>
                                    </li>
                                    <li className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300"><Link href="/">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Pinterest
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span></Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-3 text-lg">Menu</h3>
                                <ul className="flex flex-col gap-2 text-base">
                                    <Link href="/" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Home
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link href="/about/aboutus" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            About
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link href="/services/business-enhance" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Services
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link href="/traning/trainingai" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Traning
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link href="/creatikai" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Creatik AI
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <Link href="/contact" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                            Contact
                                        </span>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-3 text-lg">Say Hello</h3>
                                <p className="text-gray-300">
                                    <Link href="/">sharan@creatikai.com</Link>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <p className="text-gray-400 text-sm mt-16 text-center">
                    <Link href="/"> Creatik IT Solutions LLP © . All Rights Reserved.</Link>
                </p>
            </section>
        </>
    )
}

export default Footer