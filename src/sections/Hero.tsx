"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import bipcardsPhone from "@/assets/bipcards_phone.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  // 3 const for parallax effect
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [250, -150]);

  return (
    // section background gradient styling
    <section ref={heroRef} className="pt-8 pb-20 overflow-x-clip
      bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_70%)]">
      <div className="container">
        {/* md:flex - all elements are inlined as long as screen > medium sized */}
        <div className="md:flex items-center">
          <div className="md:w-[600px]">
            <div className="tag">
              Engage with your customers
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black
              to-[#001E80] text-transparent bg-clip-text mt-6">
              Tap to gain business insight and growth
            </h2>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Dive in to your business data and analyze, discern from
              your customers, and get guidance on improving your engagements.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Sign up</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>          
          <div className="mt-20 md:mt-0 md:ml-7 md:flex relative">            
            <motion.img 
              src={bipcardsPhone.src} 
              alt="Bipcards Phone"
              animate={{ translateY: [-5, 5] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease:"easeInOut"
              }}
            />           
          </div>          
        </div>
      </div>
    </section>
  )
};
