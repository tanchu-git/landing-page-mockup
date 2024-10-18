"use client";

import productShowcase from "@/assets/productShowcase.png"
import napkinFlow from "@/assets/napkin-ecosystem.png";
import google from "@/assets/bipcards_google.webp";
import brick from "@/assets/bipcards_brick.webp";
import insta from "@/assets/bipcards_insta.webp";
import tripadvisor from "@/assets/bipcards_tripadvisor.webp";
import trustpilot from "@/assets/bipcards_trustpilot.webp";
import yelp from "@/assets/bipcards_yelp.webp";
import { useState } from "react";
import { motion, useScroll, useTransform, wrap, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const napkinRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleXY = useTransform(scrollYProgress, [0, 0.15], [0.6, 1]);

  const images = [brick.src, google.src, insta.src, yelp.src, tripadvisor.src, trustpilot.src];

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
            scaleX: scaleXY,
            scaleY: scaleXY
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
        <motion.img 
          src={productShowcase.src} 
          alt="Product Image" 
          className="mt-10 mx-auto"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </section>
  )
};
