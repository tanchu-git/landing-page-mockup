import productShowcase from "@/assets/productShowcase.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24">
      <div className="container">
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
        <Image src={productShowcase} alt="Product Image" className="mt-10" />
      </div>
    </section>
  )
};
