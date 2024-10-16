import productShowcase from "@/assets/productShowcase.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="max-w-[700px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Deep dive into your business data</div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b
          from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Gain competitive advantage and improve your rating
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Powered by AI, our analytics service will cut through the noise, 
            help you focus on the essentials, and guide you towards growth.
          </p>
        </div>
        <Image src={productShowcase} alt="Product Image" className="mt-10" />
      </div>
    </section>
  )
};
