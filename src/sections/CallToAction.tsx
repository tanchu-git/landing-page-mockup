import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Sign up today
          </h2>
          <p className="section-description mt-5">
            Get started with an app designed to help you drive customer engagements and grow your business.
          </p>
        </div>
        <div className="flex gap- mt-10 justify-center">
          <button className="btn btn-primary">Sign up</button>
          <button className="btn btn-text gap-1">
            <span>Got questions?</span>
            <ArrowRight className="h-5 w-5"/>
          </button>               
        </div>
      </div>
    </section>
  )
};
