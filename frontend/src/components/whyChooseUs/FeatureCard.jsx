import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeatureCard({ id, title, description, isHighlighted }) {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { autoAlpha: 0, y: 100 }, 
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        }
      });
  }, []);

  const baseClasses =
    "group flex flex-col grow items-start px-7 py-12 w-full font-bold rounded-xl max-md:px-5 max-md:mt-8 transition-colors duration-300";
  const highlightedClasses = isHighlighted
    ? "bg-red-600 text-white hover:bg-white hover:text-red-600"
    : "bg-white hover:bg-red-600 hover:text-white";
  const numberClasses = "text-red-600 group-hover:text-white";
  const titleClasses = "text-zinc-600 group-hover:text-white";
  const descriptionClasses = "text-neutral-500 group-hover:text-white";

  return (
    <div ref={cardRef} className={`${baseClasses} ${highlightedClasses}`}>
      <div className={`text-5xl leading-none ${numberClasses} max-md:text-4xl`}>
        {id}
      </div>
      <div className={`mt-2 text-2xl leading-loose ${titleClasses}`}>
        {title}
      </div>
      <div
        className={`self-stretch mt-2.5 text-base leading-6 ${descriptionClasses}`}
      >
        {description}
      </div>
    </div>
  );
}
