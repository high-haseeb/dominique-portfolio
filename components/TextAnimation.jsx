
import React, { useEffect } from "react";
import { gsap } from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    gsap.set("#text", { autoAlpha: 0 });

    gsap.to("#text", {
      duration: 1,
      autoAlpha: 1,
      delay: 0.5,
      stagger: 0.1,
      onComplete: function () {
        gsap.to("#mask rect", { duration: 1, attr: { height: 0 }, ease: "power2.inOut" });
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <svg className="w-64 h-16 relative" viewBox="0 0 400 100">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <text id="text" x="0" y="60" textAnchor="middle" className="text-4xl font-bold">Your Text Here</text>
          </mask>
        </defs>
        <rect id="revealRect" x="0" y="0" width="100%" height="100%" fill="#333" mask="url(#mask)" />
      </svg>
    </div>
  );
};

export default TextAnimation;
