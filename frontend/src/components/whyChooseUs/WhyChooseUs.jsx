import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { whyChooseUsData } from "./WhyChooseUsData";

export function WhyChooseUs() {
  return (
    <div className="flex flex-col px-20 py-28 w-full bg-zinc-100 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="self-start text-5xl font-bold leading-[67px] text-neutral-900 max-md:text-4xl max-md:leading-[60px]">
                Why Choose <br/> Us?
              </div>
              <div className="mt-11 text-base leading-6 text-neutral-700 max-md:mt-10">
                Whether you're looking to switch to solar energy or upgrade your
                procurement services, our sales and marketing company is here to help.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {whyChooseUsData.slice(0, 2).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <FeatureCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-0 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {whyChooseUsData.slice(2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
