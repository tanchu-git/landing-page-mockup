"use client";

import GoogleLogo from "@/assets/google-logo-01.svg";
import InstagramLogo from "@/assets/instagram-logo-01.svg";
import RecoLogo from "@/assets/reco-logo-01-01.svg";
import TripAdvisorLogo from "@/assets/tripadvisor-logo-01.svg";
import TrustpilotLogo from "@/assets/trustpilot-logo-01.svg";
import YelpLogo from "@/assets/yelp-logo-01.svg";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        {/* gradient mask - make the sides transparent except for the middle */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              // 2 identical set of logos, loop through 1st, then 2nd and repeat
              translateX: "-50%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <GoogleLogo className="logo-ticker-svg" />
            <InstagramLogo className="logo-ticker-svg" />
            <RecoLogo className="logo-ticker-svg" />
            <TripAdvisorLogo className="logo-ticker-svg" />
            <TrustpilotLogo className="logo-ticker-svg" />
            <YelpLogo className="logo-ticker-svg" />
            {/* 2nd set of logos for infite loop */}
            <GoogleLogo className="logo-ticker-svg" />
            <InstagramLogo className="logo-ticker-svg" />
            <RecoLogo className="logo-ticker-svg" />
            <TripAdvisorLogo className="logo-ticker-svg" />
            <TrustpilotLogo className="logo-ticker-svg" />
            <YelpLogo className="logo-ticker-svg" />
          </motion.div>
        </div>
      </div>
    </div>
  )
};
