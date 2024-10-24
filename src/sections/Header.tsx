import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/bipcards.png";
import MenuIcon from "@/assets/menu.svg";
import BipcardsLogo from "@/assets/bipcards_logo.svg"

export const Header = () => {
  return (
      <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
        <p className="text-white/60 hidden md:block">Tap, share & grow!</p>
        <div className="inline-flex items-center gap-1">
          <p>Start growing your business today</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      {/* Navbar */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <BipcardsLogo className="w-48" />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Customers</a>
              <a href="#">Contact Us</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items
                justify-center tracking-tight">Sign up</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
