import ArrowRight from "@/assets/arrow-right.svg";
import bipcardsPhone from "@/assets/bipcards_phone.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    // section background gradient styling
    <section className="pt-8 pb-20 overflow-x-clip
      bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_70%)]">
      <div className="container">
        {/* md:flex - all elements are inlined as long as screen > medium sized */}
        <div className="md:flex items-center">
          <div className="md:w-[600px]">
            <div className="tag">
              Engage with your customers
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black
              to-[#001E80] text-transparent bg-clip-text mt-6">
              Tap to gain business insight and growth
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Dive in to your business data and analyze, discern from
              your customers, and get recommendations on improving your engagements.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Start your trial</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>          
          <div className="mt-20 md:mt-0 md:ml-7 md:flex relative">            
            <Image src={bipcardsPhone} alt="Bipcards Phone" />           
          </div>          
        </div>
      </div>
    </section>
  )
};
