"use client"
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function Faq() {

    const [activeIndex, setActiveIndex] = useState(null);

    // Start counters when section comes into view


    const toggleFAQ = (read: any) => {
        setActiveIndex(activeIndex === read ? null : read);
    };

    const faqs = [
        {
            question: "How can AI enhance my business promotion efforts?",
            answer:
                "AI can optimize your promotional strategies by providing targeted advertising, automating social media management, personalizing content, and offering predictive insights to enhance overall campaign effectiveness.",
        },
        {
            question: "What specific AI tools do you offer for business promotions?",
            answer:
                "We offer a range of AI tools including automated ad targeting systems, social media analytics platforms, content personalization engines, lead generation and scoring tools, and performance optimization solutions.",
        },
        {
            question: "How does AI improve targeted advertising?",
            answer:
                "AI analyzes customer data to identify and segment target audiences, enabling you to deliver personalized ads that are more likely to resonate and convert, ultimately improving ROI.",
        },
        {
            question: "Can AI help with social media management?",
            answer:
                "Yes, AI can automate social media posting, analyze engagement metrics, optimize content for various platforms, and provide insights into audience trends and preferences.",
        },
    ];



    const phrases = [
        "AI Training",
        "Python & Machine Learning",
        "Full Stack Development",
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


    return (
        <>
            <section className='bg-[url(/traningbg-image.jpg)] h-auto w-full bg-no-repeat bg-cover'>
                <div className='w-full py-10  px-0 sm:pt-[50px] md:pt-[100px] md:pl-10 text-white'>
                    <h2 className='text-3xl text-center sm:text-4xl md:text-6xl font-semibold p-5'>AI Image <br /> Generator FAQs</h2>
                    <div className="w-full max-w-2xl  mx-auto p-3 md:p-6">
                        {faqs.map((item, read) => (
                            <div key={`faq-${read}`} className="border-b border-gray-300 py-4 cursor-pointer select-none">
                                <div className="flex justify-between items-center" onClick={() => toggleFAQ(read)}>
                                    <h2 className="text-lg md:text-[30px] font-semibold text-white">{item.question}</h2>
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
                                            <p className="mt-3 text-gray-400 font-bold text-[15px] md:text-[22px]  p-2 rounded">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="bg-[url(/faqbg-img.jpg)] h-auto w-full bg-no-repeat bg-cover">
                <div className="text-center py-[150px] md:py-[250px]">
                    <h2 className="uppercase text-center text-white ">design agency</h2>
                    <h3 className="text-white font-bold text-center text-3xl md:text-[50px]">
                        The area of our <br />
                        <span className="inline-block ">
                            {text}
                        </span>
                    </h3>
                    <button className="text-white bg-green-500 hover:bg-green-600 text-center p-4 px-6 mt-5 rounded-[10px]">About us</button>

                </div>

            </section>
        </>
    )
}

export default Faq