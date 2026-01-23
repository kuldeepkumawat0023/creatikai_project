"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    FaSearch,
    FaSignInAlt, FaSignOutAlt
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);
    const mobileSearchRef = useRef<HTMLDivElement>(null);


    // 👇 Close search input on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target;

            if (
                searchRef.current &&
                target instanceof Node &&
                !searchRef.current.contains(target)
            ) {
                setSearchOpen(false);
            }

            if (
                mobileSearchRef.current &&
                target instanceof Node &&
                !mobileSearchRef.current.contains(target)
            ) {
                setSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    // 👇 Sticky header on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsSticky(true);
            else setIsSticky(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [aboutOpen, setAboutOpen] = useState(false);
    // training
    const [trainingOpen, setTrainingOpen] = useState(false);
    const [aiOpen, setAiOpen] = useState(false);
    const [marketingOpen, setMarketingOpen] = useState(false);
    const [roboticsOpen, setRoboticsOpen] = useState(false);
    const [workshopOpen, setWorkshopOpen] = useState(false);
    // service
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aiStudioOpen, setAiStudioOpen] = useState(false);
    const [serviceTrainingOpen, setServiceTrainingOpen] = useState(false);
    const [automationOpen, setAutomationOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);

    const [creatikOpen, setCreatikOpen] = useState(false);


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // ✅ Check login status on mount
   useEffect(() => {
    const checkLogin = () => {
        const token = localStorage.getItem("adminToken");
        setIsLoggedIn(!!token);
    };

    checkLogin();

    // listen for changes
    window.addEventListener("storage", checkLogin);
    window.addEventListener("authChange", checkLogin);

    return () => {
        window.removeEventListener("storage", checkLogin);
        window.removeEventListener("authChange", checkLogin);
    };
}, []);

    // ✅ Logout handler with confirmation
   const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (!confirmed) return;

    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
            method: "POST",
            credentials: "include",
        });

        // Clear localStorage
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");

        // 🔥 Turant UI update
        setIsLoggedIn(false);

        // 🔥 Navbar ko notify karo (event listener catch karega)
        window.dispatchEvent(new Event("authChange"));

        // Redirect
        window.location.href = "/login";

    } catch (error) {
        console.error("Logout failed:", error);
        alert("Error while logging out!");
    }
};






    return (
        <>
            <header
                className={`w-full z-100 transition-all duration-300 ${isSticky
                    ? "fixed top-0 bg-gray-900 shadow-lg"
                    : "relative bg-gray-900 shadow-md"
                    } text-white`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
                    <Link
                        href="/"
                        className=" sm:text-2xl tracking-wide text-white"
                    >
                        <img className="w-60" src="/logo.webp" alt="logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                Home
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        {/* About Dropdown */}
                        <div className="group relative">
                            <button className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300 flex items-center gap-1">
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                    About
                                </span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            {/* Dropdown Box */}
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-3 flex flex-col gap-2">

                                <Link
                                    href="/about/aboutus"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/about/faq"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    FAQ
                                </Link>

                            </div>
                        </div>

                        {/* Traning */}
                        <div className="group relative">
                            <button className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300 flex items-center gap-1">
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                    Training
                                </span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[950px] md:w-[1200px] bg-gray-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-6 grid grid-cols-1 sm:grid-cols-4 gap-6">

                                {/* Column 1 - AI Training */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">AI Training</h2>
                                    <Link
                                        href="/training/trainingai"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Training AI
                                    </Link>
                                    <Link
                                        href="/training/python-machine-learning"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Python & Machine Learning
                                    </Link>
                                    <Link
                                        href="/training/full-stack-mern-development"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Full Stack & MERN Development
                                    </Link>
                                </div>

                                {/* Column 2 - Python & Machine Learning */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">Digital Marketing</h2>
                                    <Link
                                        href="/training/digital-marketing-course"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Digital Marketing Course
                                    </Link>
                                    <Link
                                        href="/training/social-media-campaign"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Social Media Campaign
                                    </Link>
                                    <Link
                                        href="/training/google-ads"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Google Ads(PPC)
                                    </Link>
                                </div>

                                {/* Column 3 - Full Stack & MERN Development */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">Robotics & AI</h2>
                                    <Link
                                        href="/training/basics-robotics"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Basics Of Robotics
                                    </Link>
                                    <Link
                                        href="/training/intermediate-robotics"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Intermediate Robotics
                                    </Link>
                                    <Link
                                        href="/training/advanced-robotics"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Advanced Robotics
                                    </Link>
                                </div>

                                {/* Column 4 - Workshop */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">Workshop</h2>
                                    <Link
                                        href="/training/ai-tools"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        AI Tools
                                    </Link>
                                    <br />
                                    <Link
                                        href="/training/robotics"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                          before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Robotics
                                    </Link>
                                    <Link
                                        href="/training/digital-marketing-with-automatic-tools"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                          before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Digital Marketing With Automatic Tools
                                    </Link>
                                </div>

                            </div>

                        </div>
                        {/* services */}
                        <div className="group relative">
                            <button className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300 flex items-center gap-1">
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                    Services
                                </span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[950px] md:w-[1200px] bg-gray-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-6 grid grid-cols-1 sm:grid-cols-4 gap-6">

                                {/* Column 1 - AI Training */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">AI Studio</h2>
                                    <Link
                                        href="/services/business-enhance"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Business Enhance
                                    </Link>
                                    <Link
                                        href="/services/vedio-creation"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Vedio Creation
                                    </Link>
                                    <Link
                                        href="/services/content-creation"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Content Creation
                                    </Link>
                                </div>

                                {/* Column 2 - Python & Machine Learning */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">Training</h2>

                                    <Link
                                        href="/services/ai-training"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        AI Training
                                    </Link>
                                    <br />
                                    <Link
                                        href="/services/education-with-ai"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Education With AI
                                    </Link>
                                    <Link
                                        href="/services/digital-marketing"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                            before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                            before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>

                                {/* Column 3 - Full Stack & MERN Development */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">AI Automotion</h2>
                                    <Link
                                        href="/services/business-automotion"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Business Automotion
                                    </Link>
                                    <Link
                                        href="/services/lead-automotion"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Lead Automotion
                                    </Link>
                                    <Link
                                        href="/services/work-flow-automotion"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                           before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        Work Flow Automotion
                                    </Link>
                                </div>

                                {/* Column 4 - Workshop */}
                                <div>
                                    <h2 className="text-white text-[18px] font-semibold mb-2">AI Tools Consulting</h2>
                                    <Link
                                        href="/services/ai-tools"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                         before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                         before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        AI Tools
                                    </Link>
                                    <br />
                                    <Link
                                        href="/services/ai-chatbot"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                          before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        AI Chatbot
                                    </Link>
                                    <Link
                                        href="/services/ai-personal-assistant"
                                        className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                          before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                          before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                    >
                                        AI Personal Assistant
                                    </Link>
                                </div>

                            </div>

                        </div>

                        {/* Creatik-AI */}
                        <div className="group relative">
                            <button className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300 flex items-center gap-1">
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                    Creatik AI
                                </span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            {/* Dropdown Box */}
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 p-3 flex flex-col gap-2">

                                <Link
                                    href="/creatik-ai/ai-for-business"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    AI For Business
                                </Link>

                                <Link
                                    href="/creatik-ai/ai-tools"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    AI Tools
                                </Link>
                                <Link
                                    href="/creatik-ai/ai-traning"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    AI Training
                                </Link>
                                <Link
                                    href="/creatik-ai/cases"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    Cases
                                </Link>
                                <Link
                                    href="/creatik-ai/list"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    List
                                </Link>
                                <Link
                                    href="/creatik-ai/portfolio"
                                    className="relative inline-block px-3 pt-3 text-gray-300 hover:text-white transition-all duration-300
                                      before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-0 before:h-[1px]
                                      before:bg-gray-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    Portfolio
                                </Link>

                            </div>
                        </div>
                        <Link href="/contact" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                Contact
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/career" className="group relative w-fit cursor-pointer text-gray-300 transition-all duration-300">
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[17px]">
                                Career
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Search + Sign In (Desktop) */}
                    <div className="hidden md:flex items-center gap-3 pr-2">
                        <div className="relative" ref={searchRef}>
                            <div>
                                <button
                                    className="text-white p-1 rounded hover:bg-white/20 transition-colors"
                                    onClick={() => setSearchOpen(!searchOpen)}
                                >
                                    <FaSearch size={18} />
                                </button>

                                {searchOpen && (
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        autoFocus
                                        className="absolute right-0 top-0 w-40 pl-3 pr-3 py-1 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none backdrop-blur-md transition-all duration-200"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-3 pr-2">
                            {/* ✅ Sign In / Sign Out Button */}
                            {!isLoggedIn ? (
                                <Link href="/login">
                                    <button className="flex items-center gap-2 text-white bg-purple-600 px-3 py-1 rounded-full hover:bg-purple-700 transition">
                                        <FaSignInAlt /> Sign In
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-white bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 transition"
                                >
                                    <FaSignOutAlt /> Sign Out
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex items-center pr-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900 flex flex-col items-start px-6 pb-4 space-y-2 text-white">

                        {/* Home */}
                        <Link href="/" className="py-2 hover:text-cyan-400 w-full border-b border-gray-800">
                            Home
                        </Link>

                        {/* About Dropdown */}
                        <div className="w-full border-b border-gray-800">
                            <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className="flex justify-between items-center w-full py-2"
                            >
                                <span>About</span>
                                {aboutOpen ? (
                                    <FaChevronDown className="text-cyan-400" />
                                ) : (
                                    <FaChevronRight className="text-cyan-400" />
                                )}
                            </button>
                            {aboutOpen && (
                                <div className="pl-4 flex flex-col space-y-1 text-gray-300 pb-2">
                                    <Link href="/about/aboutus" className="hover:text-cyan-400">About Us</Link>
                                    <Link href="/about/faq" className="hover:text-cyan-400">FAQ</Link>
                                </div>
                            )}
                        </div>

                        {/* Training Dropdown (Mobile – Each Column Expandable) */}
                        <div className="w-full border-b border-gray-800">
                            <button
                                onClick={() => setTrainingOpen(!trainingOpen)}
                                className="flex justify-between items-center w-full py-2"
                            >
                                <span>Training</span>
                                {trainingOpen ? (
                                    <FaChevronDown className="text-cyan-400" />
                                ) : (
                                    <FaChevronRight className="text-cyan-400" />
                                )}
                            </button>

                            {trainingOpen && (
                                <div className="pl-4 flex flex-col space-y-2 text-gray-300 pb-2">

                                    {/* === Column 1 - AI Training === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setAiOpen(!aiOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">AI Training</span>
                                            {aiOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {aiOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/training/trainingai" className="hover:text-cyan-400">Training AI</Link>
                                                <Link href="/training/python-machine-learning" className="hover:text-cyan-400">Python & Machine Learning</Link>
                                                <Link href="/training/full-stack-mern-development" className="hover:text-cyan-400">Full Stack & MERN Development</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 2 - Digital Marketing === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setMarketingOpen(!marketingOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">Digital Marketing</span>
                                            {marketingOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {marketingOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/training/digital-marketing-course" className="hover:text-cyan-400">Digital Marketing Course</Link>
                                                <Link href="/training/social-media-campaign" className="hover:text-cyan-400">Social Media Campaign</Link>
                                                <Link href="/training/google-ads" className="hover:text-cyan-400">Google Ads (PPC)</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 3 - Robotics & AI === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setRoboticsOpen(!roboticsOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">Robotics & AI</span>
                                            {roboticsOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {roboticsOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/training/basics-robotics" className="hover:text-cyan-400">Basics Of Robotics</Link>
                                                <Link href="/training/intermediate-robotics" className="hover:text-cyan-400">Intermediate Robotics</Link>
                                                <Link href="/training/advanced-robotics" className="hover:text-cyan-400">Advanced Robotics</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 4 - Workshop === */}
                                    <div>
                                        <button
                                            onClick={() => setWorkshopOpen(!workshopOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">Workshop</span>
                                            {workshopOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {workshopOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/training/ai-tools" className="hover:text-cyan-400">AI Tools</Link>
                                                <Link href="/training/robotics" className="hover:text-cyan-400">Robotics</Link>
                                                <Link href="/training/digital-marketing-with-automatic-tools" className="hover:text-cyan-400">Digital Marketing With Automatic Tools</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>




                        {/* Services Dropdown (Mobile – Each Column Expandable) */}
                        <div className="w-full border-b border-gray-800">
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex justify-between items-center w-full py-2"
                            >
                                <span>Services</span>
                                {servicesOpen ? (
                                    <FaChevronDown className="text-cyan-400" />
                                ) : (
                                    <FaChevronRight className="text-cyan-400" />
                                )}
                            </button>

                            {servicesOpen && (
                                <div className="pl-4 flex flex-col space-y-2 text-gray-300 pb-2">

                                    {/* === Column 1 - AI Studio === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setAiStudioOpen(!aiStudioOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">AI Studio</span>
                                            {aiStudioOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {aiStudioOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/services/business-enhance" className="hover:text-cyan-400">Business Enhance</Link>
                                                <Link href="/services/vedio-creation" className="hover:text-cyan-400">Vedio Creation</Link>
                                                <Link href="/services/content-creation" className="hover:text-cyan-400">Content Creation</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 2 - Training === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setServiceTrainingOpen(!serviceTrainingOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">Training</span>
                                            {serviceTrainingOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {serviceTrainingOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/services/ai-training" className="hover:text-cyan-400">AI Training</Link>
                                                <Link href="/services/education-with-ai" className="hover:text-cyan-400">Education With AI</Link>
                                                <Link href="/services/digital-marketing" className="hover:text-cyan-400">Digital Marketing</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 3 - AI Automation === */}
                                    <div className="border-b border-gray-700 pb-2">
                                        <button
                                            onClick={() => setAutomationOpen(!automationOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">AI Automation</span>
                                            {automationOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {automationOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/services/business-automotion" className="hover:text-cyan-400">Business Automotion</Link>
                                                <Link href="/services/lead-automotion" className="hover:text-cyan-400">Lead Automotion</Link>
                                                <Link href="/services/work-flow-automotion" className="hover:text-cyan-400">Work Flow Automotion</Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* === Column 4 - AI Tools Consulting === */}
                                    <div>
                                        <button
                                            onClick={() => setToolsOpen(!toolsOpen)}
                                            className="flex justify-between items-center w-full py-1"
                                        >
                                            <span className="text-white font-semibold">AI Tools Consulting</span>
                                            {toolsOpen ? (
                                                <FaChevronDown className="text-cyan-400" />
                                            ) : (
                                                <FaChevronRight className="text-cyan-400" />
                                            )}
                                        </button>
                                        {toolsOpen && (
                                            <div className="pl-3 flex flex-col space-y-1 mt-1">
                                                <Link href="/services/ai-tools" className="hover:text-cyan-400">AI Tools</Link>
                                                <Link href="/services/ai-chatbot" className="hover:text-cyan-400">AI Chatbot</Link>
                                                <Link href="/services/ai-personal-assistant" className="hover:text-cyan-400">AI Personal Assistant</Link>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            )}
                        </div>


                        {/* Creatik AI Dropdown */}
                        <div className="w-full border-b border-gray-800">
                            <button
                                onClick={() => setCreatikOpen(!creatikOpen)}
                                className="flex justify-between items-center w-full py-2"
                            >
                                <span>Creatik AI</span>
                                {creatikOpen ? (
                                    <FaChevronDown className="text-cyan-400" />
                                ) : (
                                    <FaChevronRight className="text-cyan-400" />
                                )}
                            </button>
                            {creatikOpen && (
                                <div className="pl-4 flex flex-col space-y-1 text-gray-300 pb-2">
                                    {[
                                        { href: "/creatik-ai/ai-for-business", label: "AI For Business" },
                                        { href: "/creatik-ai/ai-tools", label: "AI Tools" },
                                        { href: "/creatik-ai/ai-traning", label: "AI Training" },
                                        { href: "/creatik-ai/cases", label: "Cases" },
                                        { href: "/creatik-ai/list", label: "List" },
                                        { href: "/creatik-ai/portfolio", label: "Portfolio" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="relative inline-block text-gray-300 hover:text-cyan-400 transition-colors duration-300
                               before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] 
                               before:bg-cyan-400 before:w-0 before:transition-all before:duration-300 hover:before:w-full"
                                        >
                                            <span className="relative inline-block">{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>


                        {/* Contact + Career */}
                        <Link href="/contact" className="py-2 hover:text-cyan-400 w-full border-b border-gray-800">
                            Contact
                        </Link>
                        <Link href="/career" className="py-2 hover:text-cyan-400 w-full border-b border-gray-800">
                            Career
                        </Link>

                        {/* Search + Sign In */}
                        <div className="mt-3 w-full" ref={mobileSearchRef}>
                            <div className="relative mb-2">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full rounded-full pl-8 pr-3 py-1 text-black focus:outline-none"
                                />
                                <FaSearch className="absolute left-2 top-2 text-gray-600" />
                            </div>
                            {/* 🔐 Sign In / Sign Out */}
                            {!isLoggedIn ? (
                                <Link href="/login">
                                    <button className="flex items-center gap-2 w-full justify-center bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-full text-white transition">
                                        <FaSignInAlt /> Sign In
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 w-full justify-center bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full text-white transition"
                                >
                                    <FaSignOutAlt /> Sign Out
                                </button>
                            )}
                        </div>
                    </div>
                )}


            </header>
        </>
    );
}

