import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Entry",
    monthlyPrice: 99,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "1 business loaction",
      "Unlimited data analysis",
      "1 Bip card",
      "1 Bip disk",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 149,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 5 business loactions",
      "Unlimited data analysis",
      "Up to 10 Bip card",
      "Up to 10 Bip disk",
      "Priority support",
      "Dedicated account manager",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 199,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 10 business loactions",
      "Unlimited data analysis",
      "Up to 20 Bip card",
      "Up to 20 Bip disk",
      "Priority support",
      "Dedicated account manager",
      "Export capabilities",
      "API access",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Pricing
          </h2>        
          <p className="section-description mt-5">
            Our tiered pricing offers a flexible feature set.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ 
              title, 
              monthlyPrice,
              buttonText, 
              popular, 
              inverse, 
              features 
            }) => (
              // twMerge - define 2 different props for the same element, pick one depending on condition
              <div className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", 
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
                  <span className="tracking-tight font-bold text-black/50">
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
                      <li className="text-sm flex items-center gap-4">
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
