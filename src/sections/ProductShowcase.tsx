"use client";

import productShowcase from "@/assets/productShowcase.png"
import napkinFlow from "@/assets/napkin-ecosystem.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
    // 3 const for parallax effect
    const napkinRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: napkinRef,
      offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  return (
    <section ref={napkinRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Ecosystem</div>
          </div>
          <h2 className="section-title mt-5">
            Tap, collect and analyze
          </h2>
          <p className="section-description mt-5">
            Collect reviews, drive engagement and let us anaylze the data 
            for you. Give you the feedback and insight to improve your business.
          </p>
        </div>
        <motion.img 
          src={napkinFlow.src} 
          alt="Napkin Flow" 
          className="mt-10 mb-20 mx-auto"
          style={{
            translateY
          }}
        />
        
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Explore your business data</div>
          </div>
          <h2 className="section-title mt-5">
            Drive engagements and improve your rating
          </h2>
          <p className="section-description mt-5">
            Powered by AI, our analytics service will cut through the noise, 
            help you focus on the essentials, and guide you towards growth.
          </p>
        </div>
        <Image src={productShowcase} alt="Product Image" className="mt-10 mx-auto" />
      </div>
    </section>
  )
};
