"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

// mock data
const testimonials = [
  {
    id: 1,
    text: "As a seasoned small business owner always on the lookout for innovative tools, this instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: 2,
    text: "Our growth has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: 3,
    text: "This app has completely transformed how I manage my businesses.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: 4,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: 5,
    text: "Planning and executing business strategies has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: 6,
    text: "The AI capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: 7,
    text: "Adopting this app for our team has streamlined our workflow.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: 8,
    text: "With this app, we can easily analyze data, track progress, and manage the business all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: 9,
    text: "Its user-friendly interface and robust features support our specific needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, testimonials.length);

const TestimonialsColumn = (props: { 
  className?: string,
  testimonials: typeof testimonials
  duration?: number,
}) => (
  <div className={props.className}>
    {/* mask top to bottom, start from transparent to black - cutoff - from black to transparent */}
    <motion.div 
      className="flex flex-col gap-6 pb-6"
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: props.duration || 10,
      }}
    >
      {/* create an empty array of length 2 - loop through and map the index to duplicate our testimonials */}
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ id, text, imageSrc, name, username }) => (
              <div key={id} className="card">
                <div>{text}</div>
                {/* flex - stack in row */}
                <div className="flex items-center gap-2 mt-5">
                  {/* imageSrc is a string, need to specify the height and width */}
                  <Image src={imageSrc} alt={name} height={40} width={40} className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="tracking-tight leading-5">{username}</div>
                  </div>
                </div>
              </div>
            ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to robust features, our app has become an essential tool for business owners around the globe.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-16 max-h-[738px]  overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={12} />
          {/* hidden - default,  show on medium screen flexed*/}
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={15} />
        </div>
      </div>
    </section>
  )
};
