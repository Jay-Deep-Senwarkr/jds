"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center " id="about">
        <motion.div
          className="flex w-full bg-white items-center justify-center drop-shadow-[0_0px_15px_rgba(0,0,0,0.20)] text-5xl h-24 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "keyframes",
            duration: 0.5,
          }}>
          About Us
        </motion.div>
      </div>
      <div className="flex justify-center items-center mt-20 mb-20  ">
        <div className="w-[50%] border border-gray-300 rounded-2xl shadow-lg p-6 bg-white mt-6 drop-shadow-[0_0px_15px_rgba(0,0,0,0.20)] ">
          <p className="text-center text-lg">
            Welcome to{" "}
            <span className="text-[#FBB040] font-bold">JAN DHAN </span>{" "}
            <span className="text-[#8DC63F] font-bold">SOLUTIONS</span> 🌟 – your
            place for everything money-related and more! We’ve got your back
            with a full spectrum of services, whether it’s handling GST, filing
            income tax returns, or managing your accounting needs. Need a loan?💸
            Insurance?🛡️ We’re on it. Want to invest in mutual funds or gold?💰
            We’ve got you covered. But that&apos;s not all – we also rock at
            website and graphic design, ensuring your digital presence is just
            as strong. Plus, we do it all at super affordable rates without
            skimping on quality or reliability. At{" "}
            <span className="text-[#FBB040] font-bold">JAN DHAN</span>{" "}
            <span className="text-[#8DC63F] font-bold">SOLUTIONS</span>, we
            believe in keeping things simple, hassle-free, and downright
            awesome. Your one-stop solution for all financial and digital needs
            is just a click away!🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
