"use client";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

const Welcome = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "GST preparation Services",
        "Income Tax Returns",
        "Digital Signature (DSC)",
        "Company Formation Services with MCA",
        "Accounting Services",
        "Other Services Related to Tax/Company/Accounting",
        "Loans",
        "Insurance",
        "Tour And Travel Services",
        "Micro ATM Service",
        "Recharges",
        "Bill Payment",
        "Website & Graphic Package Design License",
        "Investment Services",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [typedRef]);

  return (
    <div className="text-7xl font-bold flex flex-col pt-[10%] pl-[5%] border-red-500 border-2 h-[93dvh] w-[50%]">
      <div>Welcome to</div>
      <div>
        <p className="text-[#FBB040]">
          Jan Dhan <span className="text-[#8DC63F]">Solutions</span>
        </p>
        <p className="text-3xl text-gray-400">
          We provide <span className="" ref={typedRef}></span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
