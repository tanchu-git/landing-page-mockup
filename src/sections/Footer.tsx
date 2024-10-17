import BipcardsLogo from "@/assets/bipcards_logo.svg"
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container"> 
        {/* background highlight is disabled in 'before:..' */}
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:w-full 
          before:blur 'before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]' before:absolute">       
          <BipcardsLogo className="w-48 dark:invert relative"/>
        </div>
        <nav className="flex sm:flex-col md:flex-row gap-6 mt-6 md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Customers</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialLinkedIn />
          <SocialInsta />
          <SocialX />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Bipcards. All rights reserved.</p>
      </div>
    </footer>
  )
};
