"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  content: string;
  image?: string;
  subtitle?: string;
  isOpen: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  content,
  title,
  image,
  style,
  id,
  isOpen,
  onClick,
  subtitle,
}) => {
  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        zIndex: isOpen ? 50 : 1,
      }}
      onClick={onClick}
      className={`w-64 bg-white overflow-hidden shadow-lg m-4 cursor-pointer transform transition-transform duration-300 ${
        isOpen ? "h-auto z-50" : "h-80"
      }`}>
      {image && (
        <motion.div className="relative w-full h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </motion.div>
      )}
      <div className="px-6 py-4">
        <motion.h2 layout="position" className="text-xl font-bold mb-2 m-">
          {title}
        </motion.h2>
        <motion.h4 layout="position" className="text-lg mb-4">
          {subtitle}
        </motion.h4>
        {isOpen && (
          <motion.div
            layout
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {content}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
