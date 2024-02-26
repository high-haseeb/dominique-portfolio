'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Loading = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    tl.to("#dot1", { y: -20, duration: 0.3, ease: "power1.inOut" })
      .to("#dot1", { y: 0, duration: 0.3, ease: "power1.inOut" })
      .to("#dot2", { y: -20, duration: 0.3, ease: "power1.inOut" }, "<0.1")
      .to("#dot2", { y: 0, duration: 0.3, ease: "power1.inOut" })
      .to("#dot3", { y: -20, duration: 0.3, ease: "power1.inOut" }, "<0.1")
      .to("#dot3", { y: 0, duration: 0.3, ease: "power1.inOut" });
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden flex items-cetner justify-center bg-[#DBBABA]">
      <div className="flex justify-center items-center h-screen">
        <div className="flex">
          <div id="dot1" className="h-4 w-4 bg-[#EF5DA3] rounded-full mx-1"></div>
          <div id="dot2" className="h-4 w-4 bg-[#EF5DA3] rounded-full mx-1"></div>
          <div id="dot3" className="h-4 w-4 bg-[#EF5DA3] rounded-full mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
