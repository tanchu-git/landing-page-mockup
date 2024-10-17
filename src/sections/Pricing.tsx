import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    id: 1,
    title: "Entry",
    monthlyPrice: 99,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "1 business location",
      "AI powered data analysis",
      "5 Bipcards",
      "5 BipQR",
      "Basic support",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 149,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 5 business locations",
      "AI powered data analysis",
      "25 Bipcards",
      "25 BipQR",
      "Priority support",
      "Dedicated account manager",
    ],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: 199,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 10 business locations",
      "AI powered data analysis",
      "50 Bipcards",
      "50 BipQR",
      "Priority support",
      "Dedicated account manager",
      "Export capabilities",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Subscription</div>
          </div>
          <h2 className="section-title mt-5">
            Tiered pricing
          </h2>        
          <p className="section-description mt-5">
            Our flexible feature set covers all your needs.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              id,
              title, 
              monthlyPrice,
              buttonText, 
              popular, 
              inverse, 
              features 
            }) => (
              // twMerge - define 2 different props for the same element, pick one depending on condition
              <div key={id} className={twMerge(
                  "card", 
                  inverse && "border-black bg-black text-white"
                )}>
                <div className="flex justify-between">
                  <h3 className={twMerge(
                      "text-lg font-bold text-black/50", 
                      inverse && "text-white/60"
                    )}>
                      {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3bFFFF,#DD7DDF)]
                      text-transparent bg-clip-text font-medium">
                        Popular
                    </span>
                  </div>
                  )}                  
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice} kr
                  </span>
                  <span className="tracking-tight font-bold">
                    /month
                  </span>
                </div>
                <button className={twMerge(
                    "btn btn-primary w-full mt-[30px]", 
                    inverse && "bg-white text-black"
                  )}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                      <li key={id} className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}          
        </div>
      </div>
    </section>
  )
};
